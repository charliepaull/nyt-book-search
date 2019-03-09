import mongoose from "mongoose";
const Schema = mongoose.Schema;

// creating the schema - the structure of the db
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true}
})

// creating the model
const GoogleBooks = mongoose.model("googlebook", bookSchema);

export default GoogleBooks;