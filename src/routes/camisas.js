import express from "express"
import CamisasControllers from "../controllers/camisas.js"

const camisasRouter = express.Router()
const camisaControllers = new CamisasControllers()

camisasRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await camisaControllers.getCamisas()

    res.status(statusCode).send({ success, statusCode, body })
})

camisasRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await camisaControllers.addCamisas(req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

camisasRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await camisaControllers.deleteCamisas(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

camisasRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await camisaControllers.updateCamisas(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

camisasRouter.get('/availables/', async (req, res) => {
    const { success, statusCode, body } = await camisaControllers.getAvailableCamisas()

    res.status(statusCode).send({ success, statusCode, body })
})

export default camisasRouter