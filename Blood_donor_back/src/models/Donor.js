import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Name is required"],
        trim:true
    },

    bloodGroup:{
        type:String,
        require:[true, "Blood Group is required"],
        enum:["O-","O+","A-","A+","B-","B+","AB-","AB+"]
    },

    phone:{
        type:String,
        require:[true,"Phone is required"],
    },

    areaName:{
        type:String,
    },

    latitude:{
        type:Number,
    },

    longitude:{
        type:Number,
    },

    available: {
        type:Boolean,
    },    
});

export default mongoose.model("doner",DonorSchema);