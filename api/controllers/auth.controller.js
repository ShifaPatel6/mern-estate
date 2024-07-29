import user from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import Jwt from 'jsonwebtoken';

export const signup = async (req, res)=>{
    const { username, email,password }= req.body;
    const hashpass= bcryptjs.hashSync(password , 10);
    const newUser= new user({ username , email , password: hashpass });
    try{
    await newUser.save();
    res.status(201).json('User created sucessfully');
    }
    catch (error){
        next(error);
    }
    
};
export const signin = async(req, res, next ) =>{
    const{ email, password } = req.body;

    try{
        const validuser= await user.findOne({email});
        if (!validuser) return next(errorHandler(404 ,'User not found'));
        const validPassword = bcryptjs.compareSync(password , validuser.password);
        if (!validPassword) return next(errorHandler(401, 'Invalid password'));
        const token= Jwt.sign({id: validuser._id}, process.env.JWT_SECRET);
        const {password: pass, ...rest}= validuser._doc;
        res.cookie('access token', token, {httpOnly:true}).status(200).json(rest);  

    }
    catch (error){
    next (error);
        
    }
};