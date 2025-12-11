import express from "express"
import { ProdutoController } from "../controllers/produto.js"

const router = express.Router()

router.get("/:tipo/:id", ProdutoController.getProduto)

export default router
