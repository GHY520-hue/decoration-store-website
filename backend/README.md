# 装修材料店后端

基于 Spring Boot + MyBatis Plus + H2 数据库的 RESTful API 服务。

## 技术栈

- Java 17+
- Spring Boot 3.2
- MyBatis Plus 3.5.5
- H2 内存数据库

## 快速开始

### 前置要求

- JDK 17 或更高版本
- Maven 3.6+

### 运行项目

```bash
# 进入后端目录
cd backend

# 使用 Maven 运行
mvn spring-boot:run

# 或者先构建再运行
mvn clean package
java -jar target/materials-1.0.0.jar
```

服务将在 http://localhost:8080 启动

### H2 数据库控制台

访问 http://localhost:8080/api/h2-console

JDBC URL: `jdbc:h2:mem:testdb`
用户名: `sa`
密码: (留空)

## API 文档

### 产品 API

#### 获取所有产品

```
GET /api/products?category=家具
```

响应示例:

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "现代简约沙发",
      "category": "家具",
      "description": "舒适透气...",
      "image_url": "http://...",
      "price": 2999.00
    }
  ]
}
```

#### 获取单个产品

```
GET /api/products/1
```

#### 创建产品

```
POST /api/products
Content-Type: application/json

{
  "name": "新沙发",
  "category": "家具",
  "description": "产品描述",
  "image_url": "图片地址",
  "price": 2999.00
}
```

#### 更新产品

```
PUT /api/products/1
Content-Type: application/json

{
  "name": "更新的产品名",
  "price": 1999.00
}
```

#### 删除产品

```
DELETE /api/products/1
```

### 案例 API

#### 获取所有案例

```
GET /api/projects
```

#### 获取单个案例

```
GET /api/projects/1
```

#### 创建案例

```
POST /api/projects
Content-Type: application/json

{
  "title": "案例标题",
  "description": "案例描述",
  "image_urls": "[\"url1\", \"url2\"]",
  "create_time": "2023-01-01T12:00:00"
}
```

注意：`image_urls` 是一个 JSON 字符串数组。

#### 更新案例

```
PUT /api/projects/1
```

#### 删除案例

```
DELETE /api/projects/1
```

## 使用 curl 测试

### 测试产品 API

```bash
# 获取所有产品
curl -X GET http://localhost:8080/api/products

# 创建产品
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "测试产品",
  "category": "家具",
  "description": "这是测试产品",
  "image_url": "http://example.com/image.jpg",
  "price": 999.00
}' http://localhost:8080/api/products

# 更新产品
curl -X PUT -H "Content-Type: application/json" -d '{
  "name": "更新的产品名",
  "price": 888.00
}' http://localhost:8080/api/products/1

# 删除产品
curl -X DELETE http://localhost:8080/api/products/1
```

### 测试案例 API

```bash
# 获取所有案例
curl -X GET http://localhost:8080/api/projects

# 创建案例
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "测试案例",
  "description": "这是测试案例",
  "image_urls": "[\"http://example.com/img1.jpg\"]"
}' http://localhost:8080/api/projects

# 更新案例
curl -X PUT -H "Content-Type: application/json" -d '{
  "title": "更新的案例标题"
}' http://localhost:8080/api/projects/1

# 删除案例
curl -X DELETE http://localhost:8080/api/projects/1
```

## 项目结构

```
backend/
├── src/main/java/com/decoration/materials/
│   ├── Application.java           # 主应用类
│   ├── common/
│   │   └── Result.java            # 通用响应类
│   ├── config/
│   │   ├── CorsConfig.java        # CORS 配置
│   │   └── MyMetaObjectHandler.java # 自动填充配置
│   ├── controller/
│   │   ├── ProductController.java # 产品控制器
│   │   └── ProjectController.java # 案例控制器
│   ├── entity/
│   │   ├── Product.java           # 产品实体
│   │   └── Project.java           # 案例实体
│   ├── mapper/
│   │   ├── ProductMapper.java     # 产品数据访问
│   │   └── ProjectMapper.java     # 案例数据访问
│   └── service/
│       ├── ProductService.java    # 产品服务
│       └── ProjectService.java    # 案例服务
└── src/main/resources/
    ├── application.yml            # 应用配置
    ├── schema.sql                 # 数据库表结构
    └── data.sql                   # 初始数据
```
