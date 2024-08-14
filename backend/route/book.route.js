import express from "express";
import { authRole } from "../middleware/auth.roles.js";
import BookModel from "../model/book.model.js";

const bookRoute = express.Router();

bookRoute.get("/view",authRole('VIEW_ALL', 'VIEWER'), async(req, res) => {
    const {old,new:newBook} = req.query;
    let filterbook = {}
    if(old){
        filterbook.dateCreated = {dateCreated:{$lt:new Date(Date.now() - 10 * 60 * 1000)}}
    }
    if(newBook){
        filterbook.dateCreated = {dateCreated:{$gt:new Date(Date.now() - 10 * 60 * 1000)}}
    }
    if(req.user.role === 'VIEW_ALL'){
        const books = await BookModel.find(filterbook)
        res.json({books})
    }
    if(req.user.role === 'VIEWER'){
        const filteruserbook = {createdBy:req.user.id}
        const books = await BookModel.find(filteruserbook)
        res.json({books})
    }
})

bookRoute.post("/create",authRole('CREATOR'), (req, res) => {
    const { title, author } = req.body;
    const findbook = BookModel.findOne({title})
    if(!findbook){
        res.json({message:"book already exist"})
    }
    const book = new BookModel({
        title,
        author,
        createdBy: req.user.id,
        dateCreated: Date.now()
    })

    book.save()
    res.status(201).json({message:"book created",book})
})

bookRoute.patch("/update/:id",authRole('CREATOR'), async(req, res) => {
    const id = req.params.id;
    
    const findbook = await BookModel.findById(id)
    console.log(findbook);
    
    if(!findbook){
        res.json({message:"book not found"})
    }
    const book = await BookModel.findByIdAndUpdate(id,req.body)
    res.json({message:"book updated",book})
})

bookRoute.delete("/delete/:id",authRole('CREATOR'), async(req, res) => {
    const id = req.params.id;
    const findbook = await BookModel.findById(id)
    if(!findbook){
        res.json({message:"book not found"})
    }
    const book = await BookModel.findByIdAndDelete(id)
    res.json({message:"book deleted",book})
})

export default bookRoute