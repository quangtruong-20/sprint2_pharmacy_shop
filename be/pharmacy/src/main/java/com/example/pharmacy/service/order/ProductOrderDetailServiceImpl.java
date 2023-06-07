package com.example.pharmacy.service.order;

import com.example.pharmacy.dto.order.ProductOrderDTO;
import com.example.pharmacy.dto.order.ProductOrderDetailDTO;
import com.example.pharmacy.entity.order.ProductOrder;
import com.example.pharmacy.entity.order.ProductOrderDetail;
import com.example.pharmacy.entity.product.Product;
import com.example.pharmacy.entity.user.User;
import com.example.pharmacy.repository.order.IProductOrderDetailRepository;
import com.example.pharmacy.repository.order.IProductOrderRepository;
import com.example.pharmacy.repository.product.IProductRepository;
import com.example.pharmacy.repository.user.IUserRepository;
import com.example.pharmacy.service.product.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProductOrderDetailServiceImpl implements IProductOrderDetailService {
    @Autowired
    private IProductOrderDetailRepository productOrderDetailRepository;
    @Autowired
    private IProductOrderRepository productOrderRepository;
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IUserRepository userRepository;
    Integer count = 0;
    public void resetCount() {
        count = 0;
    }

    @Override
    public String save(ProductOrderDetailDTO productOrderDetailDTO) {
        Product product = productRepository.findById(productOrderDetailDTO.getProductDTO().getId()).get();
        if (product.getQuantity() < productOrderDetailDTO.getQuantity()) {
            return "Số lượng không đủ";
        }
        if (count == 0) {
            ProductOrder productOrder = new ProductOrder();
            productOrderRepository.save(productOrder);
        }
        ProductOrderDetail productOrderDetail = new ProductOrderDetail();
        productOrderDetail.setProduct(new Product());
        BeanUtils.copyProperties(productOrderDetailDTO.getProductDTO(), productOrderDetail.getProduct());
        BeanUtils.copyProperties(productOrderDetailDTO, productOrderDetail);
        productOrderDetail.setProductOrder(productOrderRepository.findTheLastCart());
        if (product.getQuantity() - productOrderDetail.getQuantity() < 0) {
            return "Số lượng không đủ";
        }
        product.setQuantity(product.getQuantity() - productOrderDetail.getQuantity());
        productRepository.save(product);
        List<ProductOrderDetail> productOrderDetails = productOrderDetailRepository.findAll();
        if (productOrderDetails.isEmpty()) {
            productOrderDetailRepository.save(productOrderDetail);
            count++;
            return "";
        }
        for (int i = productOrderDetails.size() - 1; i >= 0; i--) {
            if (count != 0 && productOrderDetails.get(i).getProduct().equals(product)  && !productOrderDetails.get(i).isDelete()) {
                productOrderDetails.get(i).setQuantity(productOrderDetails.get(i).getQuantity() + productOrderDetailDTO.getQuantity());
                productOrderDetailRepository.save(productOrderDetails.get(i));
                return "";
            }
        }
        productOrderDetailRepository.save(productOrderDetail);
        count++;
        return "";
    }

    @Override
    public String update(Integer id, Integer quantity) {
        ProductOrderDetail productOrderDetail = productOrderDetailRepository.findById(id).get();
        Product product = productRepository.findById(productOrderDetail.getProduct().getId()).get();
        if (product.getQuantity() < quantity) {
            return "Số lượng không đủ";
        }
        product.setQuantity(product.getQuantity() - quantity);
        productRepository.save(product);
        if (productOrderDetail.getQuantity() + quantity <= 0) {
            delete(id);
            return "Lỗi";
        }
        productOrderDetail.setQuantity(productOrderDetail.getQuantity() + quantity);
        productOrderDetailRepository.save(productOrderDetail);
        return "";
    }

    @Override
    public void delete(int id) {
        ProductOrderDetail productOrderDetail = productOrderDetailRepository.findById(id).get();
        productOrderDetail.setDelete(true);
        Product product = productRepository.findById(productOrderDetail.getProduct().getId()).get();
        product.setQuantity(product.getQuantity() + productOrderDetail.getQuantity());
        productRepository.save(product);
        productOrderDetailRepository.save(productOrderDetail);
    }

    @Override
    public List<ProductOrderDetailDTO> findAll() {
        List<ProductOrderDetail> productOrderDetails = productOrderDetailRepository.findAllIsDeleteFalse();
        List<ProductOrderDetailDTO> productOrderDetailDTOS = new ArrayList<>();
        ProductOrderDetailDTO productOrderDetailDTO;
        for (ProductOrderDetail productOrderDetail: productOrderDetails) {
            productOrderDetailDTO = new ProductOrderDetailDTO();
            productOrderDetailDTO.setProductDTO(productService.findById(productOrderDetail.getProduct().getId()));
            BeanUtils.copyProperties(productOrderDetail, productOrderDetailDTO);
            productOrderDetailDTOS.add(productOrderDetailDTO);
        }
        return productOrderDetailDTOS;
    }

    @Override
    public void deleteAll(int id) {
        List<ProductOrderDetail> productOrderDetails = productOrderDetailRepository.findAll();
        for (int i = productOrderDetails.size() - 1; i >= 0; i--) {
            if (productOrderDetails.get(i).getProductOrder().getId() == id) {
                productOrderDetails.get(i).setDelete(true);
                productOrderDetailRepository.save(productOrderDetails.get(i));
            } else {
                break;
            }
        }
    }

    @Override
    public Page<ProductOrderDetailDTO> findTotalAll(Integer idUser, Pageable pageable) {
        Page<ProductOrderDetail> productOrderDetails = productOrderDetailRepository.findTotalAll(idUser, pageable);

        List<ProductOrderDetailDTO> productOrderDetailDTOS = new ArrayList<>();
        ProductOrderDetailDTO productOrderDetailDTO;
        for (ProductOrderDetail productOrderDetail: productOrderDetails) {
            productOrderDetailDTO = new ProductOrderDetailDTO();
            productOrderDetailDTO.setProductOrderDTO(new ProductOrderDTO());
            BeanUtils.copyProperties(productOrderDetail.getProductOrder(), productOrderDetailDTO.getProductOrderDTO());
            productOrderDetailDTO.setProductDTO(productService.findById(productOrderDetail.getProduct().getId()));
            BeanUtils.copyProperties(productOrderDetail, productOrderDetailDTO);
            productOrderDetailDTOS.add(productOrderDetailDTO);

        }
        return new PageImpl<>(productOrderDetailDTOS, pageable, productOrderDetails.getTotalElements());
    }
    }
