package com.decoration.materials.controller;

import com.decoration.materials.common.Result;
import com.decoration.materials.entity.Product;
import com.decoration.materials.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public Result<List<Product>> getProducts(@RequestParam(required = false) String category) {
        List<Product> products = productService.getAllProducts(category);
        return Result.success(products);
    }
    
    @GetMapping("/{id}")
    public Result<Product> getProduct(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return Result.error(404, "产品不存在");
        }
        return Result.success(product);
    }
    
    @PostMapping
    public Result<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return Result.success(createdProduct);
    }
    
    @PutMapping("/{id}")
    public Result<Void> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        boolean success = productService.updateProduct(id, product);
        if (!success) {
            return Result.error(404, "产品不存在");
        }
        return Result.success();
    }
    
    @DeleteMapping("/{id}")
    public Result<Void> deleteProduct(@PathVariable Long id) {
        boolean success = productService.deleteProduct(id);
        if (!success) {
            return Result.error(404, "产品不存在");
        }
        return Result.success();
    }
}
