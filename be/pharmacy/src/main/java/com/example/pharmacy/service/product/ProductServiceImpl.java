package com.example.pharmacy.service.product;

import com.example.pharmacy.dto.order.ProductOrderDetailDTO;
import com.example.pharmacy.dto.product.CategoryDTO;
import com.example.pharmacy.dto.product.ProductDTO;
import com.example.pharmacy.dto.product.ProductDetailDTO;
import com.example.pharmacy.dto.product.ProductImgDTO;
import com.example.pharmacy.entity.order.ProductOrderDetail;
import com.example.pharmacy.entity.product.Product;
import com.example.pharmacy.entity.product.ProductImg;
import com.example.pharmacy.repository.product.IProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductServiceImpl implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    public void setValueOfProductImgSet(Set<ProductImg> productImgs, Set<ProductImgDTO> productImgDTOS) {
        ProductImgDTO productImgDTO;
        for (ProductImg productImg: productImgs) {
            productImgDTO = new ProductImgDTO();
            BeanUtils.copyProperties(productImg, productImgDTO);
            productImgDTOS.add(productImgDTO);
        }
    }
    public void setValueOfProductOrderDetailSet(Set<ProductOrderDetail> productOrderDetails, Set<ProductOrderDetailDTO> productOrderDetailDTOS) {
        ProductOrderDetailDTO productOrderDetailDTO;
        for (ProductOrderDetail productOrderDetail: productOrderDetails) {
            productOrderDetailDTO = new ProductOrderDetailDTO();
            BeanUtils.copyProperties(productOrderDetail, productOrderDetailDTO);
            productOrderDetailDTOS.add(productOrderDetailDTO);
        }
    }

    public void copyProductToProductDTO (Product product, ProductDTO productDTO) {
        productDTO.setProductDetailDTO(new ProductDetailDTO());
        BeanUtils.copyProperties(product.getProductDetail(), productDTO.getProductDetailDTO());

        productDTO.setCategoryDTO(new CategoryDTO());
        BeanUtils.copyProperties(product.getCategory(),productDTO.getCategoryDTO());

        productDTO.setProductImgDTO(new TreeSet<>(Comparator.comparingInt(ProductImgDTO::getId)));
        setValueOfProductImgSet(product.getProductImgs(), productDTO.getProductImgDTO());
        BeanUtils.copyProperties(product, productDTO);

        productDTO.setProductOrderDetailDTO(new TreeSet<>(Comparator.comparingInt(ProductOrderDetailDTO::getId)));
        setValueOfProductOrderDetailSet(product.getProductOrderDetailSet(),productDTO.getProductOrderDetailDTO());
        BeanUtils.copyProperties(product,productDTO);

    }



    @Override
    public Page<ProductDTO> findByName(Pageable pageable, String name) {
        Page<Product> products = productRepository.findProductByNameContaining(pageable, name);
        List<ProductDTO> productDTOS = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product: products) {
            productDTO = new ProductDTO();
            copyProductToProductDTO(product, productDTO);
            productDTOS.add(productDTO);
        }
        return new PageImpl<>(productDTOS, pageable, products.getTotalElements());
    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findById(id).get();
        ProductDTO productDTO = new ProductDTO();
        copyProductToProductDTO(product, productDTO);
        return productDTO;
    }

    @Override
    public Page<ProductDTO> findAll(Pageable pageable) {
        Page<Product> products = productRepository.findAll(pageable);
        List<ProductDTO> productDTOS = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product: products) {
            productDTO = new ProductDTO();
            copyProductToProductDTO(product, productDTO);
            productDTOS.add(productDTO);
        }
        return new PageImpl<>(productDTOS, pageable, products.getTotalElements());
    }
}
