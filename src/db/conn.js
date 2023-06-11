import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adarshpriyadarshi001:5mwf8qpAYZ4glK7H@cluster0.3cmmxwt.mongodb.net/openToIntern?retryWrites=true&w=majority")
    .then(()=> console.log("DB Connected"))
    .catch((err)=> console.log(err.message))