import express, { urlencoded } from 'express'
import fn from './mongooseConnection.js';
import detailsModel from './SchemaAndModel.js';

let app = express();
let port =3000;


app.use(urlencoded({extended:true}))

fn();

app.listen(port,()=>{
        console.log(`server is listningn at port ${port}`);
})


app.post('/',(req,res)=>{
        console.log(req.body);
        let {fname,pwd} = req.body;
        let user1 = new detailsModel({
                name:fname,
                password:pwd
        });
        user1.save().then((result)=>{
                console.log(result)
        })

        res.send("hellow World");
})