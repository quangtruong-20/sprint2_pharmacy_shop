package com.example.pharmacy.dto.order;

import com.example.pharmacy.dto.product.ProductDTO;
public class ProductOrderDetailDTO {
    private Integer id;
    private Long totalMoney;
    private Integer quantity;
    private boolean isDelete = false;
    private ProductDTO productDTO;
    private ProductOrderDTO productOrderDTO;

    public ProductOrderDetailDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Long totalMoney) {
        this.totalMoney = totalMoney;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public ProductDTO getProductDTO() {
        return productDTO;
    }

    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }

    public ProductOrderDTO getProductOrderDTO() {
        return productOrderDTO;
    }

    public void setProductOrderDTO(ProductOrderDTO productOrderDTO) {
        this.productOrderDTO = productOrderDTO;
    }
}
