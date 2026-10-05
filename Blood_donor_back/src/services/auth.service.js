import User from "../models/User.js";

const createUser = async(data)=>{
    const Usercreate = await User.create({
        ...data
    });
    return {
        name:Usercreate.name,
        email:Usercreate.email,
        role:Usercreate.role,
    }
   
}

export default {createUser};