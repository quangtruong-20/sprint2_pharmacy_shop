package com.example.pharmacy.service.order;

import com.example.pharmacy.dto.order.ProductOrderDTO;
import com.example.pharmacy.entity.order.ProductOrder;
import com.example.pharmacy.entity.user.User;
import com.example.pharmacy.repository.order.IProductOrderRepository;
import com.example.pharmacy.repository.user.IUserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductOrderServiceImpl implements IProductOrderService{
    @Autowired
    private IProductOrderRepository iProductOrderRepository;
    @Autowired
    private IProductOrderDetailService productOrderDetailService;
    @Autowired
    private IUserRepository userRepository;
    @Override
    public void update(ProductOrderDTO productOrderDTO) {
        User user = userRepository.findById(productOrderDTO.getUserDTO().getId()).get();
        ProductOrder productOrder = iProductOrderRepository.findTheLastCart();
        productOrderDTO.setId(productOrder.getId());
        BeanUtils.copyProperties(productOrderDTO, productOrder);
        productOrder.setDelete(true);
        productOrder.setUser(user);
        productOrderDetailService.deleteAll(productOrder.getId());
        iProductOrderRepository.save(productOrder);
    }
}
