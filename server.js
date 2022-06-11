import fs from "fs";
import express from "express"
const app = express()
const port = 8080

app.listen(port, () => {
    {
        console.log(`Servidor http escuchando en el puerto ${port}`);
    }
})

const read = async () => {
    try {
        const data = await fs.promises.readFile('./productos.json', "utf-8");
        return JSON.parse(data);
    } catch (error) {
        res.send({'Error': e.message})
    }

    }


app.get('/', (req, res) => {
    res.send("<h1>Bienvenidos al tercer desafío</h1>")
})

app.get('/productos', async (req, res) => {
    try {
        const allProducts = await read()
        const showAllProducts = JSON.stringify(allProducts)
        res.send(`Los productos disponibles son ${showAllProducts}`)
    } catch (error) {
        res.send({'Error': error.message})
    }

})

app.get('/productoRandom', async (req, res) => {
    try {
        const allProducts =  await read()
        const randomizer = Math.floor(Math.random()*allProducts.length);
        const randomProduct =  JSON.stringify(allProducts[randomizer])
        res.send(`${randomProduct}`)
    } catch (error) {
        res.send({'Error': e.message})
    }
})

