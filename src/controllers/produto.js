import { ProdutoData } from "../dataAccess/produto.js"

export const ProdutoController = {
  async getProduto(req, res) {
    const { tipo, id } = req.params

    try {
      const produto = await ProdutoData.getProdutoById(tipo, id)

      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" })
      }

      res.json(produto)
    } catch (error) {
      console.error("Erro no controller ao buscar produto:", error)
      res.status(500).json({ message: "Erro interno no servidor" })
    }
  }
}
