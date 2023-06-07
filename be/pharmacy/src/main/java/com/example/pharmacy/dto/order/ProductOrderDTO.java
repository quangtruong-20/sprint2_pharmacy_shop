package com.example.pharmacy.dto.order;
import com.example.pharmacy.dto.user.UserDTO;
import com.example.pharmacy.entity.user.User;
import java.util.Set;

public class ProductOrderDTO {
    private Integer id;
    private String orderDate;
    private Long totalMoney;
    private boolean isDelete = false;
    private UserDTO userDTO;
    private Set<ProductOrderDetailDTO> productOrderDetailDTO;

    public ProductOrderDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public Long getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(Long totalMoney) {
        this.totalMoney = totalMoney;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Set<ProductOrderDetailDTO> getProductOrderDetailDTO() {
        return productOrderDetailDTO;
    }

    public void setProductOrderDetailDTO(Set<ProductOrderDetailDTO> productOrderDetailDTO) {
        this.productOrderDetailDTO = productOrderDetailDTO;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
