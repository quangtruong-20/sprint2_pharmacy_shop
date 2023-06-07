package com.example.pharmacy.dto.product;

import com.example.pharmacy.dto.order.ProductOrderDetailDTO;

import com.example.pharmacy.entity.product.Category;

import java.util.Set;

public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private Integer quantity;
    private CategoryDTO categoryDTO;
    private Set<ProductImgDTO> productImgDTO;
    private ProductDetailDTO productDetailDTO;
    private Set<ProductOrderDetailDTO> productOrderDetailDTO;


    public ProductDTO() {

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

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }

    public Set<ProductImgDTO> getProductImgDTO() {
        return productImgDTO;
    }

    public void setProductImgDTO(Set<ProductImgDTO> productImgDTO) {
        this.productImgDTO = productImgDTO;
    }

    public ProductDetailDTO getProductDetailDTO() {
        return productDetailDTO;
    }

    public void setProductDetailDTO(ProductDetailDTO productDetailDTO) {
        this.productDetailDTO = productDetailDTO;
    }

    public Set<ProductOrderDetailDTO> getProductOrderDetailDTO() {
        return productOrderDetailDTO;
    }

    public void setProductOrderDetailDTO(Set<ProductOrderDetailDTO> productOrderDetailDTO) {
        this.productOrderDetailDTO = productOrderDetailDTO;
    }
}
