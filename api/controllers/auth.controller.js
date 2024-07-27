import user from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

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