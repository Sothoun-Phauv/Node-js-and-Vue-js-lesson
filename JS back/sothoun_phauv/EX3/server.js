const { readFileSync } = require("fs");
const express = require("express");
const { userInfo } = require("os");
const app = express();

app.listen(3000);
app.use(express.static("public"));

//  READ THE INSTRUCTIONS in PDF FILE
let products = JSON.parse(readFileSync('data/products.json'));
console.log(products)

app.get('/products',(req,res)=>{
    let id = req.query.id;
    let result = null;
    let price = null;
    for (let product of products){
        if (product.id === parseInt(id)){
            result = product.name;
            price = product.price;
        }
    }
    res.send({name:result,price:price});
})


app.get('/filter_products',(req,res)=>{
    let min_price = req.query.min_price;
    let max_price = req.query.max_price;
    console.log(max_price)
    let result = [];
    for (product of products){
        if (product.price >= parseInt(min_price) && product.price <=parseInt(max_price)){
            result.push({name:product.name,price:product.price});
        }
    }
    res.send(result);
})
