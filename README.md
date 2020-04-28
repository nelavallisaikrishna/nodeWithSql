//npm init

npm install --save express body-parser bcrypt jsonwebtoken mysql
CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50), password VARCHAR(255))
CREATE TABLE product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), description VARCHAR(255), image VARCHAR(255))
CREATE TABLE product_detail (
   size    DOUBLE ,
   price   DOUBLE,
   product_id INTEGER,
   FOREIGN KEY(product_id) REFERENCES product(id)
  );
  
// Register User
  EndPoint : http://localhost:3000/api/registerUser
  method:POST
  requestBody:{"email":"saikrishna", "password":"test@123"}
  
  
 // Login User
  EndPoint: http://localhost:3000/api/login
  method:POST
  requestBody:{"email":"saikrishna", "password":"test@123"}
  
// Create Product
  EndPoint: http://localhost:3000/api/product
  method:PUT
  requestBody:{"name":"test", "description":"some info", "image":"imageUrl", "size":50, "price":999}
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI"
  
// Update Product
  EndPoint: http://localhost:3000/api/product
  method:POST
  requestBody:{"name":"test1", "description":"some info", "image":"imageUrl", "size":50, "price":999, "id":20}
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI"

  
// Get Products
  EndPoint: http://localhost:3000/api/product (or)  http://localhost:3000/api/product?id=1
  method:POST
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI"

  
// Delete Product
  EndPoint: http://localhost:3000/api/product
  method:DELETE
  requestBody:{"id":20}
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI"

  
  
    
  

  
  
  
  
  
