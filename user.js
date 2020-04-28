var bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
var dbConfig = require('./dbConnection')
var db = dbConfig.connection;
var secret = 'dsadsadhjskahjaskhfajhfsahfdkjhfas'


async function createUserAPI(req, res) {
    try {
        var createUser = req.body;
        if(!req.body.email){
            res.send({"message":"email is required"})
        }
        if (!req.body.password) {
            req.body.password = "test@123"
        }
        let selectQry = 'SELECT * from user WHERE email='+'"'+req.body.email+'"'
        db.query (selectQry, function(error, results){
            if (results.length > 0){
                res.send({"message": "User Already exists"})
            }
            else{
                bcrypt.hash(req.body.password, 12, function (err, hash) {
                    let insertQry = "INSERT INTO user (email, password) VALUES ('" +req.body.email+"', '"+hash+"')";
                    db.query(insertQry);
                    res.send({ "status": true, "message": "User Registered Successfully"});
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
                        res.json({
                            status: true,
                            message: 'Authentication successful!',
                            token: token
                        });
                        console.log("Authentication successful!")

                    }else{
                        res.send({"message":"Invalid Password"})
                    }
                });
            }
            else{
               res.send({"message":"User Not Found"})
            }
        });
        // var results = await User.findOne({'auth.email': email});
        // if (results != null) {
        //     var pasmepassword = await bcrypt.compare(password, results.auth.password);
        //     if (pasmepassword) {
        //         let token = await jwt.sign({email: email, role: results.userType, id: results._id},
        //             config.secret,
        //             {
        //                 expiresIn: '24h' // expires in 24 hours
        //             }
        //         );
        //         res.json({
        //             result: results,
        //             status: true,
        //             message: 'Authentication successful!',
        //             token: token
        //         });
        //         console.log("Authentication successful!")
        //     } else {
        //         res.json({
        //             result: Messages.userOrPasswordWrong,
        //             status: false
        //         });
        //     }
        // } else {
        //     res.json({
        //         result: Messages.userNotRegister,
        //         status: false
        //     });
        // }

    } catch (err) {
        console.log("err---------------", err)
        throw err;
    }
}


module.exports.createUser = createUserAPI;
module.exports.loginAPI = loginAPI;