import express from "express";
import cors from "cors";
import {sample_foods} from "./data";

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods", (req, res, next) => {
    // res.status(401);
    // res.send("INVALID TOKEN");
    next();
}, (req, res) => {
    res.status(200);
    res.send(sample_foods);
})

// Port is listening at 5000
const port = 5000;
app.listen(port,() =>{
    console.log("Website served on http://localhost:"+ port);
})