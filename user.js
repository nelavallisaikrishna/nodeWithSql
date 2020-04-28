var bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
var dbConfig = require('./dbConnection')
var db = dbConfig.connection;
var secret = 'dsadsadhjskahjaskhfajhfsahfdkjhfas'


async function createUserAPI(req, res) {
    try {
        if(!req.body.email){
            res.send({"message":"email is required"})
        }
        if (!req.body.password) {
            req.body.password = "test@123"
        }
        let selectQry = 'SELECT * from user WHERE email='+'"'+req.body.email+'"'
        db.query (selectQry, function(error, results){
            if (results.length > 0){
                res.status(200).json({"message": "User Already exists"})
            }
            else{
                bcrypt.hash(req.body.password, 12, function (err, hash) {
                    let insertQry = "INSERT INTO user (email, password) VALUES ('" +req.body.email+"', '"+hash+"')";
                    db.query(insertQry);
                    res.status(200).json({ "status": true, "message": "User Registered Successfully"});
                })

            }
        });

    } catch (err) {
        console.log("Error saving user: ");
        console.log(err);
        throw err;
    }
}

async function loginAPI(req, res) {
    console.log("req.body", req.body)
    var email = req.body.email
    var password = req.body.password
    try {
        let selectQry = 'SELECT * from user WHERE email='+'"'+email+'"';
        db.query (selectQry, function(error, results){
            if (results.length > 0){
                let userData = results[0];
                bcrypt.compare(password, userData.password, function(err, result) {
                    // result == true
                    if(result){
                        let token =  jwt.sign({email: email},secret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }
                        );
                        res.status(200).json({
                            status: true,
                            message: 'Authentication successful!',
                            token: token
                        });
                        console.log("Authentication successful!")

                    }else{
                        res.status(200).json({"message":"Invalid Password"})
                    }
                });
            }
            else{
               res.status(200).json({"message":"User Not Found"})
            }
        });
    } catch (err) {
        console.log("err---------------", err)
        throw err;
    }
}

let checkToken = async(req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    try {
        if (token) {
            var decoded = await jwt.verify(token, secret)
            if (!decoded) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                next();
            }

        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }catch (err) {
        return res.json({
            success: false,
            message: 'Token is not valid'
        });
        throw err
    }
};


module.exports.createUser = createUserAPI;
module.exports.loginAPI = loginAPI;
module.exports.checkToken = checkToken;