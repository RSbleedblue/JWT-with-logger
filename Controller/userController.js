import User from "../Model/UserModel.js";

class UserController{
    constructor(){

    }
    async addUser(req,res){
        const {name, password} = req.body;
        const newUser = new User({name,password});
        await newUser.save();
        return res.status(200).json({message:"User created successfully",success: true});
    }
    async loginUser(req,res){
        const {name, password} = req.body;
        const user = await User.findOne({name});
        if(!user){
            return res.status(401).json({message:"User Not Registered", success: false});
        }
        const isvalid = await user.comparePassword(password);
        if(!isvalid){
            return res.status(401).json({message:"User Password is incorrect",success:false});
        }
        const token =await user.generateToken();
        return res.status(200).json({message:"Log in successful",success: true,token : token});
        
    }
}
export default UserController;