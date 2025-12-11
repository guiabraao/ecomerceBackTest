import express, { text } from "express"
import UsersControllers from "../controllers/users.js"
import { authMiddleware } from "../middlewares/authMiddlewares.js"
import { adminMiddleware } from "../middlewares/adminMiddleware.js"

const usersRouter = express.Router()

const usersControllers = new UsersControllers()

usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.getUsers()

    res.status(statusCode).send({ success, statusCode, body })
})

usersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.deleteUsers(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

usersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.updateUser(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

usersRouter.get('/admin/lista', authMiddleware, adminMiddleware, (req, res) => {
    res.json({text: "Admin"})
})

export default usersRouter