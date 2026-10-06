
import User from "../models/User.js";
import bcrypt from "bcrypt";

const createUser = async(data)=>{
    const hashpassword= await bcrypt.hash(data.password,10);
    const Usercreate = await User.create({
        ...data,
        password:hashpassword,
    });
    
    return {
        name:Usercreate.name,
        email:Usercreate.email,
        role:Usercreate.role,

      
    }
  
   
}

export default {createUser};