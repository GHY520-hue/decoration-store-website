package com.decoration.materials.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.decoration.materials.entity.Product;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductMapper extends BaseMapper<Product> {
}
