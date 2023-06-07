package com.example.pharmacy.repository.product;
import com.example.pharmacy.entity.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    Page<Product> findProductByNameContaining(Pageable pageable, String name);
}
