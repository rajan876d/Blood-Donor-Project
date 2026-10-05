 import BloodRequest from "../models/BloodRequest.js";
    const BloodRequestcreted = async(data) =>{
     const Bloodrequest = await BloodRequest.create({
        recipientName:data.recipientName,
        phone:data.phone,
        bloodGroupNeeded:data.bloodGroupNeeded,
        areaName:data.areaName,
        latitude:data.latitude,
        longitude:data.longitude,
        urgency:data.urgitude,
        status:data.status,
     });

     return{
         recipientName:Bloodrequest.recipientName,
        phone:Bloodrequest.phone,
        bloodGroupNeeded:Bloodrequest.bloodGroupNeeded,
        areaName:Bloodrequest.areaName,
        latitude:Bloodrequest.latitude,
        longitude:Bloodrequest.longitude,
        urgency:Bloodrequest.urgitude,
        status:Bloodrequest.status,
     }
    }

    export default {BloodRequestcreted};