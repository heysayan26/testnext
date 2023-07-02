import connectDb from "../../middleware/mongoose";
import User from "../../models/user";

const handler = async (req,res)=>{
if(req.method == 'POST'){

const {name, email, password}= req.body

let user =  new User({
    name: name,
    password: password,
    email: email
    })
await user.save()
 res.status(200).json({ "sucess":true})
}


}

     

export default connectDb(handler);