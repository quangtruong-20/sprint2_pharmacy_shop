package com.example.pharmacy.service.category;

import com.example.pharmacy.entity.product.Category;

public interface ICategoryService {

    Iterable<Category> findAll();
}
