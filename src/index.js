import express from "express";
import "./db/conn.js";
import centralRouter from "./routes/router.js";

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', centralRouter);

app.listen(port, ()=> {
    console.log(`Server is running in port ${port}`)
})

