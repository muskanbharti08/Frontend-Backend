import mongoose from "mongoose";


let fn = async() =>{
       await mongoose.connect("mongodb://127.0.0.1:27017/db")
        .then(()=>{
                console.log("connected successfully");
        }).catch(()=>{
                console.log("connection failed");
        })

}
export default fn;