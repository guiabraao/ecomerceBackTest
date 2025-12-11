import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

export const ProdutoData = {
  async getProdutoById(tipo, id) {
    try {
      const collection = Mongo.db.collection(tipo)
      const produto = await collection.findOne({ _id: new ObjectId(id) })
      return produto
    } catch (error) {
      console.error("Erro no DataAccess ao buscar produto:", error)
      throw error
    }
  }
}
