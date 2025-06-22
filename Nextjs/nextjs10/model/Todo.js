import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema({
    ,updatedAt:{
        default:da
    }
})

TodoSchema.pre('save',function(next){
    this.updatedAt=Date.now();
    next();
})

export default mongoose.model.Todo || mongoose.model('Todo',TodoSchema);