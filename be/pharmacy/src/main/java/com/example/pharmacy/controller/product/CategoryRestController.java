package com.example.pharmacy.controller.product;

import com.example.pharmacy.entity.product.Category;
import com.example.pharmacy.service.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/category")
public class CategoryRestController {

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/getAllCategroy")
    public ResponseEntity<List<Category>> getAllCategroy() {

        List<Category> categoryList = (List<Category>) categoryService.findAll();

        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

}

