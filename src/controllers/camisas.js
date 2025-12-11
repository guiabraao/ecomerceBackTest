import CamisaDataAccess from "../dataAccess/camisas.js"
import { ok, serverError } from '../helpers/httpResponse.js'

export default class CamisasControllers {
    constructor() {
        this.dataAccess = new CamisaDataAccess()
    }

    async getCamisas() {
        try{
            const camisas = await this.dataAccess.getCamisas()

            return ok(camisas)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAvailableCamisas(camisaId) {
        try{
            const result = await this.dataAccess.getAvailableCamisas(camisaId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async addCamisas(camisaData) {
        try{
            const result = await this.dataAccess.addCamisa(camisaData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteCamisas(camisaId) {
        try{
            const result = await this.dataAccess.deletCamisas(camisaId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateCamisas(camisaId, camisaData) {
        try{
            const result = await this.dataAccess.updateCamisas(camisaId, camisaData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}