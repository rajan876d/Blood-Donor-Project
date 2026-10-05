import doner from "../models/Donor.js";


const createDoner = async(data) =>{
    const doners = await doner.create({
       name:data.name,
       bloodGroup:data.bloodGroup,
       phone:data.phone,
       areaName:data.areaName,
       latitude:data.latitude,
       longitude:data.longitude,
       available:data.available
    });

    return {
        name:doners.name,
       bloodGroup:doners.bloodGroup,
       phone:doners.phone,
       areaName:doners.areaName,
       latitude:doners.latitude,
       longitude:doners.longitude,
       available:doners.available
    }
};


export default {createDoner};