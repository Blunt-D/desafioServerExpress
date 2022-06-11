import fs from "fs";
import express from "express"
const app = express()
const port = 8080

class Contenedor {
    constructor(filename) {
        this.filename = filename;
    }

    read = async () => {
        try {
            const data = await fs.promises.readFile(this.filename, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            res.send({'Error': e.message})
        }
    
        }
}

const productos = new Contenedor("./productos.json");



app.listen(port, () => {
    {
        console.log(`Servidor http escuchando en el puerto ${port}`);
    }
})




app.get('/', (req, res) => {
    res.send("<h1>Bienvenidos al tercer desafío</h1>")
})

app.get('/productos', async (req, res) => {
    try {
        const allProducts = await productos.read() 
        const showAllProducts = allProducts.map(obj => {
            return obj.title
        })
        res.send(`Los productos disponibles son ${showAllProducts}`)
    } catch (error) {
        res.send({'Error': error.message})
    }
})

app.get('/productoRandom', async (req, res) => {
    try {
        const allProducts =  await productos.read()
        const randomizer = Math.floor(Math.random()*allProducts.length);
        const randomProduct =  JSON.stringify(allProducts[randomizer])
        res.send(`${randomProduct}`)
    } catch (error) {
        res.send({'Error': error.message})
    }
})

