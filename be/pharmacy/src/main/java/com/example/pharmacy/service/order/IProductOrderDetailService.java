package com.example.pharmacy.service.order;

import com.example.pharmacy.dto.order.ProductOrderDetailDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductOrderDetailService {
    String save(ProductOrderDetailDTO productOrderDetailDTO);
    String update(Integer id, Integer quantity);
    void delete(int id);
    List<ProductOrderDetailDTO> findAll();
    void deleteAll(int id);
    Page<ProductOrderDetailDTO> findTotalAll(Integer idUser, Pageable pageable);
}
