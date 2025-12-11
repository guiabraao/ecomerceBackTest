import ChuteiraDataAccess from "../dataAccess/chuteiras.js"
import { ok, serverError } from '../helpers/httpResponse.js'

export default class ChuteirasControllers {
    constructor() {
        this.dataAccess = new ChuteiraDataAccess()
    }

    async getChuteiras() {
        try{
            const chuteiras = await this.dataAccess.getChuteiras()

            return ok(chuteiras)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAvailableChuteiras(chuteiraId) {
        try{
            const result = await this.dataAccess.getAvailableChuteiras(chuteiraId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async addChuteiras(chuteiraData) {
        try{
            const result = await this.dataAccess.addChuteira(chuteiraData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteChuteiras(chuteiraId) {
        try{
            const result = await this.dataAccess.deletChuteiras(chuteiraId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateChuteiras(chuteiraId, chuteiraData) {
        try{
            const result = await this.dataAccess.updateChuteiras(chuteiraId, chuteiraData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}