package com.example.pharmacy.repository.order;

import com.example.pharmacy.entity.order.ProductOrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IProductOrderDetailRepository extends JpaRepository<ProductOrderDetail, Integer> {
    @Query(value = "select * from product_order_detail where is_delete = false", nativeQuery = true)
    List<ProductOrderDetail> findAllIsDeleteFalse();

    @Query(value = "select * from product_order_detail pd join product_order po on pd.product_order_id = po.id\n" +
            " where pd.is_delete = true and po.user_id = :idUser", nativeQuery = true)
    Page<ProductOrderDetail> findTotalAll(@Param("idUser") Integer idUser, Pageable pageable);
}
