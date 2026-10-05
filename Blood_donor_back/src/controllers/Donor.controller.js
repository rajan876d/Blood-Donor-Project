import BloodRequestservice from "../services/BloodRequest.service.js"

const Bloodrequest = async(req,res) =>{
    try {
        const Bloodrequest = await BloodRequestservice.BloodRequestcreted(req.body);
        res.json(Bloodrequest);
    } catch (error) {
        res.status(400).json({message:error.message})
    };
}

export default {Bloodrequest};