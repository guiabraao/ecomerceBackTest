import { MongoClient } from "mongodb"

export const Mongo = {
  client: null,
  db: null,

  async connect({ mongoConnectionString, monogoDBName }) {
    try {
      const client = new MongoClient(mongoConnectionString)
      await client.connect()
      const db = client.db(monogoDBName)

      this.client = client
      this.db = db

      console.log(`✅ Conectado ao MongoDB: ${monogoDBName}`)
      return this
    } catch (error) {
      console.error("❌ Erro ao conectar ao MongoDB:", error)
      throw error
    }
  }
}
