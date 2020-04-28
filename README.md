//npm init<br>

//npm install --save express body-parser bcrypt jsonwebtoken mysql <br>
//CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50), password VARCHAR(255)) <br>
//CREATE TABLE product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), description VARCHAR(255), image VARCHAR(255)) <br>
//CREATE TABLE product_detail (
   size    DOUBLE ,
   price   DOUBLE,
   product_id INTEGER,
   FOREIGN KEY(product_id) REFERENCES product(id)
  ); <br>
  
// Register User <br>
  EndPoint : http://localhost:3000/api/registerUser <br>
  method:POST <br>
  requestBody:{"email":"saikrishna", "password":"test@123"} <br>
  
  
 // Login User <br>
  EndPoint: http://localhost:3000/api/login <br>
  method:POST <br>
  requestBody:{"email":"saikrishna", "password":"test@123"} <br>
  
// Create Product <br>
  EndPoint: http://localhost:3000/api/product <br>
  method:PUT <br>
  requestBody:{"name":"test", "description":"some info", "image":"imageUrl", "size":50, "price":999} <br>
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI" <br>
  
// Update Product <br>
  EndPoint: http://localhost:3000/api/product <br>
  method:POST <br>
  requestBody:{"name":"test1", "description":"some info", "image":"imageUrl", "size":50, "price":999, "id":20}<br>
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI" <br>

  
// Get Products <br>
  EndPoint: http://localhost:3000/api/product (or)  http://localhost:3000/api/product?id=1 <br>
  method:POST <br>
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI" <br>

  
// Delete Product
  EndPoint: http://localhost:3000/api/product
  method:DELETE
  requestBody:{"id":20}
  Headers : "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmlrYSIsImlhdCI6MTU4ODA2Mjc0MiwiZXhwIjoxNTg4MTQ5MTQyfQ.lfd0W8XvHZoctbvWEq83lgm3ZZyHPhH2y_Re-C5j2iI"

  
  
    
  

  
  
  
  
  
