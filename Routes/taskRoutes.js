import express from "express";
import notesModel from "../Models/taskModel.js";

const router = express.Router();

router.get("/notes",  async(req, res)=>{
    
    res.json(await notesModel.find())
})

router.get("/notes/:id",  async(req, res)=>{
    res.json(await notesModel.findById(req.params.id))
})

router.post("/notes",  async(req, res)=>{
  
    res.json(await notesModel.create(req.body))
})

router.put("/notes/:id",  async(req, res)=>{
    res.json(await notesModel.findByIdAndUpdate(req.params.id, req.body, {new:true}))
})

export default router