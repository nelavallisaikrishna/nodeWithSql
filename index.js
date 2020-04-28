const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const user = require('./user');
const product = require('./products');



app.use(bodyParser.json());

app.get('/',  (req,res) => {
    res.send({"name" :"Welcome to Developers World"})
});
app.post('/api/registerUser',user.createUser);
app.post('/api/login',user.loginAPI);
app.all('/api/products',user.checkToken, product.products);

app.listen(3000, function () {
    console.log("Welcome to novastrid app sai.. server started at 3000")
})


