import jwt from 'jsonwebtoken';

const JWT = (req,res,next)=>{
    try{
        const token = req.header("authorization");
        if(!token){
            return res.status(403).json({message:"Token is not present",success: true});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).json({message:"Error in Middleware",success: false});
    }
}
export default JWT;