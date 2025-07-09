import { FastifyInstance } from "fastify";

import { teamsRepository } from "../repositories/teams-repository";

export const TeamsController = (server: FastifyInstance) => {
  server.get("/api/teams", async (request, response) => {
    response.type("application/json").code(200);
  
    const content = await teamsRepository();
    response.send(content);
  });
}