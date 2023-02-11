const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
      offer: String,
      src: String,
      image: String,
      booktitle: String,
      author: String,
      actualprice: String,
      initialprice: String
})

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
    ProductModel
}

// {"offer":"45%","id":"1","src":"https://www.bookswagon.com/book/it-starts-us-colleen-hoover/9781398518179","image":"https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/179/9781398518179.jpg",
// "booktitle":"It Starts with Us","author":"Colleen Hoover","actualprice":"384","initialprice":"699"}
