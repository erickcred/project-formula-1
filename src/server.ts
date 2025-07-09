import fastify from "fastify";
import cors from "@fastify/cors";

import { TeamsController } from "./controllers/teams-controller";
import { DriversController } from "./controllers/drivers-contrller";
import { Routes } from "./router/routes";

const server = fastify({
  logger: true,
});
server.register(cors, {
  origin: "*",
});

server.register(Routes);

server.listen({
  port: 3333
}, () => {
  console.log("Server init");
});
