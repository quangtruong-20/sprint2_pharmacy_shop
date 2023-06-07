package com.example.pharmacy.dto.product;

import java.util.Set;

public class CategoryDTO {
    private Integer id;
    private String name;
    private Set<ProductDTO> productDTO;

    public CategoryDTO() {
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

    public Set<ProductDTO> getProductDTO() {
        return productDTO;
    }

    public void setProductDTO(Set<ProductDTO> productDTO) {
        this.productDTO = productDTO;
    }
}
