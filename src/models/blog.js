import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model("Blog", BlogSchema)
export default Blog