const jwt = require("jsonwebtoken");
   

module.exports = function(req,res,next){
    const TOKEN  =  req.headers.authorization;
    const SECRET =  process.env.JWT_SECRET ||"$!qi$_o(M,c`zRS"; // this is the secret access key for JWT

    if(TOKEN){
        jwt.verify(TOKEN, SECRET,(err, decodedToken)=>{
            if(err){res.status(401).json({message: "invalid Username/Password, please try again"})}
            else {req.jwt = decodedToken; next();};
        });
    }
    else {
        res.status(401).json({message: "Unauthorized Access, Please Login/Signup"})
    };
};
