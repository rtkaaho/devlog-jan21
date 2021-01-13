import {starWarsAPI} from "../../../api";

// init api
const api = starWarsAPI();

export default async (req, res) => {
  const planet = await api.getPlanet({ planetId: req.query.planetId });

  res.statusCode = 200
  res.json(planet);
}
