import mongoose from "mongoose";


let detailsSchema = mongoose.Schema({
        name:String,
        password : String
});


let detailsModel  =  mongoose.model("Detail",detailsSchema);

export default detailsModel;