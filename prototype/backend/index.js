const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
const Jwt = require('jsonwebtoken');
const jwtkey = 'alpha-1'; 
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtkey, { expiresIn: "1h" }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong, Please try after some time!" })
        }
        else{
        res.send({result ,  auth: token })
        }
    })
})

app.post("/login", async (req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "1h" }, (err, token) => {
                if (err) {
                    res.send({ result: "Something went wrong, Please try after some time!" })
                }
                else{
                res.send({user,  auth: token })
                }
            })

        } else {
            res.send({ result: 'No User Found' })
        }
    } else {
        res.send({ result: 'Enter all credentials' })
    }
})


app.listen(5000)