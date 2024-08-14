import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
    title: {type:String, required:true},
    author: {type:String, required:true},
    createdBy: {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    dateCreated: {type:Date, default:Date.now},
    
})

const BookModel = mongoose.model("book", bookschema);

export default BookModel