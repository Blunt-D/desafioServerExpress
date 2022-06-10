import fs from "fs";
import express from "express"
const app = express()
const port = 8080

const read = () => {
    const data = fs.readFileSync('./productos.json', "utf-8");
    return JSON.parse(data);
};


app.get('/', (req, res) => {
    res.send("<h1>Bienvenidos al tercer desafío</h1>")
})

app.get('/productos', (req, res) => {
    const allProducts =  read()
    const showAllProducts =  JSON.stringify(allProducts.sort())
    res.send(`Los productos disponibles son ${showAllProducts}`)
})

app.get('/productoRandom', (req, res) => {
    const allProducts =  read()
    const randomizer = Math.floor(Math.random()*allProducts.length);
    const randomProduct =  JSON.stringify(allProducts[randomizer])
    res.send(`${randomProduct}`)
})

app.listen(port, () => {
    {
        console.log(`Servidor http escuchando en el puerto ${port}`);
    }
})