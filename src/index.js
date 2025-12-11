import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { Mongo } from './database/mongo.js'
import authRouter from './auth/auth.js'
import usersRouter from './routes/users.js'
import chuteirasRouter from './routes/chuteiras.js'
import camisasRouter from './routes/camisas.js'
import orderRouter from './routes/orders.js'
import produtoRouter from './routes/produto.js'
import { ObjectId } from 'mongodb'

config()

async function main() {
    const hostname = 'localhost'
    const port = 5000

    const app = express()

    // Funcionalidades
    await Mongo.connect({
        mongoConnectionString: process.env.MONGO_URI,
        monogoDBName: process.env.MONGO_DB_NAME,
    })

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to 90min'
        })
    })


    app.use('/auth', authRouter)
    app.use('/users', usersRouter)
    app.use('/chuteira', chuteirasRouter)
    app.use('/camisa', camisasRouter)
    app.use('/orders', orderRouter)
    app.use('/produto', produtoRouter)

    app.get('/produto/:tipo/:id', async (req, res) => {
        const { tipo, id } = req.params;

        try {
            const db = Mongo.db; // ✅ acessa o banco pelo objeto Mongo
            const collection = db.collection(tipo);

            const produto = await collection.findOne({ _id: new ObjectId(id) });

            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }

            res.json(produto);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    });


    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()