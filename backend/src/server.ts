import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get ("/api/foods", (req, res) => {
    res.send("sample_foods");
})

const port = 5000;
app.listen(port,() =>{
    console.log("Website served on http://localhost:"+ port);
})