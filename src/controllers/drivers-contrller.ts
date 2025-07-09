import { FastifyInstance } from "fastify";
import { IRouteParams } from "../utils/router-params";

import { driversRepository } from "../repositories/teams-repository";

export const DriversController = (server: FastifyInstance) => {
  server.get("/api/drivers", async (request, response) => {
    response.type("application/json").code(200);

    const content = await driversRepository();

    response.send(content);
  });

  server.get<{Params: IRouteParams}>("/api/driver/:id", async (request, response) => {
    response.type("application/json").code(200);

    const id = parseInt(request.params.id);
    const content = await driversRepository(id);
    console.log(content)

    if (content == undefined)
      response.type("application/json").code(404);
    response.send(content);
  });
}