const database = require("../../data/db-model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const  isValid = require("../authorization/isValid");
const { options } = require("../server");


router.post("/register", (req, res) => {
    const credentials = req.body;
    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        const hash = bcryptjs.hashSync(credentials.password, rounds);
        credentials.password = hash;

        database.addUser(credentials)
        .then(user => {
            const token = createJWT(user);

            res.status(201).json({data: user, token})
        })

    } else {
        res.status(400).json({
            message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
});


router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (isValid(req.body)) {
        database.findUser(username)
        .then((user) => {
            // compare the password the hash stored in the database
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = createJWT(user);

                res.status(200).json({ token, id: user.id });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
    } 
    
    
    else {
        res.status(400).json({
            message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
});

function createJWT({id, username}){
    const payload = {
        id, 
        username
    }
    const config = {
        jwtSecret:  process.env.JWT_SECRET || "$!qi$_o(M,c`zRS",
    }
    return jwt.sign(payload, config.jwtSecret, options)
}


module.exports = router;
