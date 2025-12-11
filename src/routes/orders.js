import express from "express"
import OrdersControllers from "../controllers/orders.js"

const orderRouter = express.Router()
const ordersControllers = new OrdersControllers()

orderRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.getOrders()

    res.status(statusCode).send({ success, statusCode, body })
})

orderRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.addOrders(req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

orderRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.deleteOrders(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

orderRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.updateOrders(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

export default orderRouter