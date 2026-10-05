import express from "express";
import Donorservice from "../services/donor.service.js";


const createDoner = async(req,res) =>{
  try{
        const createDoner = await Donorservice.createDoner(req.body);
        res.json(createDoner);
  }catch(error){
    res.json({message:error.message});
  }
}


export default {createDoner};