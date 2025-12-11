import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from 'crypto'

const collectionName = 'orders'

export default class OrderDataAccess {
    async getOrders() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        return result
    }

    async addOrder(orderData) {
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(orderData)

        return result
    }

    async deletOrders(orderId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(orderId) })

        return result
    }

    async updateOrders(orderId, orderData) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndUpdate(
                { _id: new ObjectId(orderId) },
                { $set: orderData }
            )
        return result

    }
}