const express = require("express");
const { ProductRoute } = require("./routes/Product.Route");
require("dotenv").config();
const {connection} = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());

// cors middleware to avoid cors error

app.use(cors());

app.get("/", (req, res)=>{
    res.send("HOME PAGE")
})

// Product Route......

app.use("/product", ProductRoute);






app.listen(process.env.port, async ()=>{
     try {
        await connection;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running in port ${process.env.port}`)

})