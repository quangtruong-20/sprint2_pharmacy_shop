package com.example.pharmacy.entity.product;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class ProductDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    // thành phần
    private String ingredient;
    // công dụng
    private String uses;
    // đối tượng sử dụng
    private String userObject;
    // cách dùng
    private String howToUse;
    // lưu ý
    private String note;
    // cách đóng gói
    private String packing;
    // bảo quản
    private String preserve;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    public ProductDetail() {
    }

    public String getUses() {
        return uses;
    }

    public void setUses(String uses) {
        this.uses = uses;
    }

    public String getHowToUse() {
        return howToUse;
    }

    public void setHowToUse(String howToUse) {
        this.howToUse = howToUse;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }


    public String getUserObject() {
        return userObject;
    }

    public void setUserObject(String userObject) {
        this.userObject = userObject;
    }


    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getPacking() {
        return packing;
    }

    public void setPacking(String packing) {
        this.packing = packing;
    }

    public String getPreserve() {
        return preserve;
    }

    public void setPreserve(String preserve) {
        this.preserve = preserve;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
