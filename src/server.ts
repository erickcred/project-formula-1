import fastify from "fastify";

const server = fastify({
  logger: true,
});

interface ITeam {
  id: number;
  name: string;
  base: string;
};

interface IDriver {
  id: number;
  name: string;
  teamId: number;
}

const teams: ITeam[] = [
  { id: 1, name: "McLaren", base: "Woking United Kingdom" },
  { id: 2, name: "Mercedes", base: "Bracley, United Kingdim" },
  { id: 3, name: "Ferrari", base: "Italia"}
];

const drivers: IDriver[] = [
  { id: 1, name: "Rubinho Barriquelo", teamId: 1 },
  { id: 2, name: "Max Verstappen", teamId: 2 },
];

server.get("/api/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/api/drivers", async (request, response) => {
  response.type("application/json").code(200);

  return { drivers };
});

server.listen({
  port: 3333
}, () => {
  console.log("Server init");
});
