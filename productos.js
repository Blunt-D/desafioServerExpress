import fs from "fs"

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

export const productos = new Contenedor("./productos.json");

