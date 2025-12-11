import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from 'crypto'

const collectionName = 'chuteiras'

export default class ChuteiraDataAccess {
    async getChuteiras() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result
    }

    async getAvailableChuteiras() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({  available: true })
            .toArray()

        return result
    }

    async addChuteira(chuteiraData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(chuteiraData)

        return result
    }

    async deletChuteiras(chuteiraId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(chuteiraId) })

        return result
    }

    async updateChuteiras(chuteiraId, chuteiraData) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
                { _id: new ObjectId(chuteiraId) },
                { $set: chuteiraData }
            )
        return result

    }
}