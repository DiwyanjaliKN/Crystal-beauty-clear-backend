import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId : {
        type:String,
        required:true,
        unique:true 
    },
    name :{
        type:String,
        required:true
    },
    altNames:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    labledPrice:{
        type:Number,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true,
        default:["https://th.bing.com/th/id/R.09ef9b0d165f3ca946169f3339a84141?rik=k5GC%2fETEZ3jxdA&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f26%2f93%2fO86fhH.jpg&ehk=h2Kne0nrmUeDbmEiq8tnybodPL5KI5zkO%2flWlShUg5c%3d&risl=&pid=ImgRaw&r=0"]
    },
    stock:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model("product",productSchema)
export default Product;