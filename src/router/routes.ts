import { FastifyInstance } from "fastify"
import { DriversController } from "../controllers/drivers-contrller"
import { TeamsController } from "../controllers/teams-controller"

export const Routes = (server: FastifyInstance) => {
  server.register(TeamsController)
  server.register(DriversController)
}