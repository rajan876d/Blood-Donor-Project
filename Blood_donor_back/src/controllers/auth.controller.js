import authService from "../services/auth.service.js"
const register = async(req,res)=>{
    try {
        const createUser = await authService.createUser(req.body);
        res.json(createUser)
    } catch (error) {
        res.json({message:error.message})
    }
}

export default {register};