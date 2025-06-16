const express = require("express");
const server = express(); 

server.use(express.json());

let products = [

];

server.get("/products", (res, res) => {
    return res.json(products);
});

//SHOW
server.get("/products/ : id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(item => item.id === id);
    const status = product ? 200 : 404;
    
    console.log("GET :: /products/:id", product);

    return res.status(status).json(product);
})

//CREATE
server.post("/products", (req, res) =>{
    const{ name, site } = req.body;
    const nextId = products[products.length - 1].id + 1;

    const newproduct = { id, name, site };
    products.push(newproduct)

    returnres.status(201).json(newproduct);  
});

//UPDATE
server.put("/products/ : id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index =products.findIndex(item => item.id ===id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        products[index] = {id: parseInt(id), name, site }
    }

    return res.status(status).json(products[index]);
});

//DELETE
server.delete("/products/ : id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0){
        products.splice(index, 1);
    }

    return res.status(status).json();
});
server.listen(3000)