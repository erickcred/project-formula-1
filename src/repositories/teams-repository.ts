import fs from "fs";
import path from "path";
import { ITeam } from "../modules/team-module";
import { IDriver } from "../modules/driver-module";

const pathDataTeams = path.join(__dirname, "../repositories/teams.json");
const pathDataDrivers = path.join(__dirname, "../repositories/drivers.json");

export const teamsRepository = async (teamId?: number, teamName?: string): Promise<ITeam[]> => {
  const rawData = fs.readFileSync(pathDataTeams, "utf-8");
  let jsonFile = JSON.parse(rawData);

  if (teamId) 
    jsonFile = jsonFile.filter((team: ITeam) => team.id === teamId);

  if (teamName)
    jsonFile = jsonFile.filter((team: ITeam) => team.name === teamName);

  return jsonFile;
};

export const driversRepository = async (driverId?: number, driverName?: string): Promise<IDriver[]> => {
  const rawData = fs.readFileSync(pathDataDrivers, "utf-8");
  let jsonFile = JSON.parse(rawData);
  
  if (driverId) {
    jsonFile = jsonFile.filter((driver: IDriver) => driver.id === driverId);
  }

  if (driverName) {
    jsonFile = jsonFile.filter((driver: IDriver) => driver.name === driverName);
  }


  return jsonFile;
}