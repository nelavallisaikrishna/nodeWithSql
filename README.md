//npm init

//npm install --save express body-parser bcrypt jsonwebtoken mysql

//CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50), password VARCHAR(255))

//CREATE TABLE product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), description VARCHAR(255), image VARCHAR(255))

//CREATE TABLE product_detail (
   size    DOUBLE ,
   price   DOUBLE,
   product_id INTEGER,
   FOREIGN KEY(product_id) REFERENCES product(id)
  );
  
  Register User
  EndPoint : http://localhost:3000/api/registerUser
  method:POST
  requestBody:{"email":"saikrishna", "password":"test@123"}
  
  
  Login User:
  EndPoint: http://localhost:3000/api/login
  method:POST
  requestBody:{"email":"saikrishna", "password":"test@123"}
  
  
  
  
