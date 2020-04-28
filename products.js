var dbConfig = require('./dbConnection')
var db = dbConfig.connection;


function products(req, res) {
    try {
        var method = req.method;
        var body = req.body
        console.log(req.method)
        if (method === "PUT") {
            addProduct(body, res);
        } else if (method === "GET") {
            getProductData(req, res)

        } else if (method === "POST") {
            updateProduct(body, res)

        } else {
            deleteProduct(body, res)
        }

    } catch (e) {
        res.status(500).send(e)
    }
}


function addProduct(req, res) {
    try{
        if (!req.name || !req.description || !req.image || !req.size || !req.price) {
            res.status(200).json({"message": "Invalid Request"})
        } else {
            let qryOne = "INSERT INTO product (name, description, image) VALUES ('" +req.name+"', '"+req.description+"', '"+req.image+"')";
            db.query(qryOne, function (error, results) {
                if(error){
                    throw error
                }
                let qryTwo = "INSERT INTO product_detail (product_id, size, price) VALUES ('" +results.insertId+"', '"+req.size+"', '"+req.price+"')";
                db.query(qryTwo, function (err, data) {
                    if(err) throw err;
                    res.status(200).json({"message" : "product data added successfully"})
                })

            })
        }
    }catch (e) {
        throw e

    }
}


function updateProduct(req, res){
    try{
        if (!req.id || !req.name || !req.description || !req.image || !req.size || !req.price) {
            res.json({"message": "Invalid Request"})
        } else {
            let qryOne = "UPDATE product T1 INNER JOIN product_detail T2 ON T1.id = T2.product_id SET T1.name = '"+req.name+"',T1.description = '"+req.description+"',T1.image = '"+req.image+"', T2.price = '"+req.price+"', T2.size = '"+req.size+"' WHERE T1.id = "+req.id+";";
            db.query(qryOne, function (error) {
                if(error) throw error;
                res.status(200).json({"message" : "product data updated successfully"})
            })
        }
    }catch (e) {
        throw e
    }
}

function deleteProduct(req, res){
    try{
        if (!req.id) {
            res.json({"message": "Invalid Request"})
        } else {
            let qryOne = "DELETE FROM product_detail WHERE product_id = '"+req.id+"'";
            db.query(qryOne, function (error) {
                if(error){
                    throw error
                }
                let qryTwo = "DELETE FROM product WHERE id = '"+req.id+"'";
                db.query(qryTwo, function (err) {
                    if(err) throw err;
                    res.status(200).json({"message" : "product deleted  successfully"})
                })

            })
        }

    }catch (e) {
        throw e
    }
}


function getProductData(req, res){
    try{
        let qry ="";
        if(req.query && req.query.id){
            qry ="SELECT p1.name, p1.description, p1.image,p2.product_id, p2.size,p2.price FROM product p1 INNER JOIN product_detail p2 ON p1.id = p2.product_id where id="+req.query.id
        }else{
            qry ="SELECT p1.name, p1.description, p1.image,p2.product_id, p2.size,p2.price FROM product p1 INNER JOIN product_detail p2 ON p1.id = p2.product_id"
        }
        db.query(qry, function (err, result) {
            if(err) throw err;
            if(result.length > 0){
                res.status(200).json({"message" : "product data fetched  successfully", data:result})
            }else{
                res.status(200).json({"message" : "Data not found"})
            }
        })

    }catch (e) {
    throw  e
    }

}

module.exports.products = products