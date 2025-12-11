import express from "express"
import ChuteirasControllers from "../controllers/chuteiras.js"

const chuteirasRouter = express.Router()
const chuteirasControllers = new ChuteirasControllers()

chuteirasRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await chuteirasControllers.getChuteiras()

    res.status(statusCode).send({ success, statusCode, body })
})

chuteirasRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await chuteirasControllers.addChuteiras(req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

chuteirasRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await chuteirasControllers.deleteChuteiras(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

chuteirasRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await chuteirasControllers.updateChuteiras(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

chuteirasRouter.get('/availables/', async (req, res) => {
    const { success, statusCode, body } = await chuteirasControllers.getAvailableChuteiras()

    res.status(statusCode).send({ success, statusCode, body })
})

export default chuteirasRouter