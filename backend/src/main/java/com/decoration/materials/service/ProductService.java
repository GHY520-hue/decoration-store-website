package com.decoration.materials.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.decoration.materials.entity.Product;
import com.decoration.materials.mapper.ProductMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService extends ServiceImpl<ProductMapper, Product> {
    
    public List<Product> getAllProducts(String category) {
        QueryWrapper<Product> queryWrapper = new QueryWrapper<>();
        if (category != null && !category.isEmpty()) {
            queryWrapper.eq("category", category);
        }
        queryWrapper.orderByDesc("created_at");
        return this.list(queryWrapper);
    }
    
    public Product getProductById(Long id) {
        return this.getById(id);
    }
    
    public Product createProduct(Product product) {
        this.save(product);
        return product;
    }
    
    public boolean updateProduct(Long id, Product product) {
        product.setId(id);
        return this.updateById(product);
    }
    
    public boolean deleteProduct(Long id) {
        return this.removeById(id);
    }
}
