import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from 'crypto'

const collectionName = 'camisas'

export default class CamisaDataAccess {
    async getCamisas() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result
    }

    async getAvailableCamisas() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({  available: true })
            .toArray()

        return result
    }

    async addCamisa(camisaData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(camisaData)

        return result
    }

    async deletCamisas(camisaId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(camisaId) })

        return result
    }

    async updateCamisas(camisaId, camisaData) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
                { _id: new ObjectId(camisaId) },
                { $set: camisaData }
            )
        return result

    }
}