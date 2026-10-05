import mongoose from "mongoose";

const Areadatabase = new mongoose.Schema({
    areaName:{
        type:String,
        require:[true,"AreaName is required"],
        unique:true,
        trim:true,
    },

    latitude:{
        type:String,
        require:true,
    },

    longitude:{
        type:String,
        require:true,
    },

});

export default mongoose.model("Area",Areadatabase);