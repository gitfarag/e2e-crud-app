import mongoose ,{ Schema } from "mongoose";


const todoSchema = new Schema ({
    title: String,
    disc: String
})
const Todos = mongoose.model("todoSchema", todoSchema);
export default Todos;
