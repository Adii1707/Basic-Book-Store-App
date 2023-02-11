const express = require("express");
const { ProductModel } = require("../model/Product.model");

const ProductRoute = express.Router();


ProductRoute.get("/", async(req, res)=>{
    try {
        const data = await ProductModel.find();
        res.send(data);
    } catch (error) {
        res.send(err);
    }
});

 ProductRoute.post("/add", async (req, res)=>{
    try {
        const data = req.body;
        console.log(data);

        const product = new ProductModel(data);
        await product.save();
        res.send("product added")
    } catch (error) {
        console.log(error);
    }
 })


module.exports = {
    ProductRoute
}