package com.example.pharmacy.entity.product;

import com.example.pharmacy.entity.order.ProductOrderDetail;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(name = "description", columnDefinition = "text")
    private String description;
    private Double price;
    private Integer quantity;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    @JsonManagedReference
    @OneToMany(mappedBy = "product")
    private Set<ProductImg> productImgs;
    @JsonBackReference
    @OneToOne(mappedBy = "product")
    private ProductDetail productDetail;

    @JsonBackReference
    @OneToMany(mappedBy = "product")
    private Set<ProductOrderDetail> productOrderDetailSet;

    public Product() {
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<ProductImg> getProductImgs() {
        return productImgs;
    }

    public void setProductImgs(Set<ProductImg> productImgs) {
        this.productImgs = productImgs;
    }

    public ProductDetail getProductDetail() {
        return productDetail;
    }

    public void setProductDetail(ProductDetail productDetail) {
        this.productDetail = productDetail;
    }

    public Set<ProductOrderDetail> getProductOrderDetailSet() {
        return productOrderDetailSet;
    }

    public void setProductOrderDetailSet(Set<ProductOrderDetail> productOrderDetailSet) {
        this.productOrderDetailSet = productOrderDetailSet;
    }

}
