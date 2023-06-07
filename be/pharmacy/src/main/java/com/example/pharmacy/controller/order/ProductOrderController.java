package com.example.pharmacy.controller.order;

import com.example.pharmacy.dto.order.ProductOrderDTO;
import com.example.pharmacy.service.order.IProductOrderService;
import com.example.pharmacy.service.order.ProductOrderDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class ProductOrderController {
    @Autowired
    private ProductOrderDetailServiceImpl productOrderDetailService;
    @Autowired
    private IProductOrderService productOrderService;
    @PutMapping("")
    public ResponseEntity<Void> updateCart (@RequestBody ProductOrderDTO productOrderDTO) {
        productOrderService.update(productOrderDTO);
        productOrderDetailService.resetCount();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
