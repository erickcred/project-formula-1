import fastify from "fastify";
import cors from "@fastify/cors";

import { teamsRepository, driversRepository } from "./repositories/teams-repository";
import { IRouteParams } from "./utils/router-params";

const server = fastify({
  logger: true,
});
server.register(cors, {
  origin: "*",
});

server.get("/api/teams", async (request, response) => {
  response.type("application/json").code(200);

  const content = await teamsRepository();
  response.send(content);
});

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

server.listen({
  port: 3333
}, () => {
  console.log("Server init");
});
