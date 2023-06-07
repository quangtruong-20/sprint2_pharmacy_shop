package com.example.pharmacy.repository.order;

import com.example.pharmacy.entity.order.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductOrderRepository extends JpaRepository<ProductOrder,Integer> {
    @Query(value = "SELECT * FROM product_order ORDER BY id DESC LIMIT 1", nativeQuery = true)
    ProductOrder findTheLastCart();


}
