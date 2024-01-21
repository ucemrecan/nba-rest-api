const express = require("express");
const router = express.Router();
const data = require("../db/teams.json");

router.get("/teams", (req, res) => {
  res.json(data);
});

router.get("/teams/:name", (req, res) => {
  try {
    const name = req.params.name.toUpperCase();
    const team = data.teams.find((team) => team.name.toUpperCase() === name);
    res.json(team);
  } catch (error) {
    res.status(404).send("Team not found");
  }
});

router.get("/division/:division", (req, res) => {
  try {
    const division =
      req.params.division.charAt(0).toUpperCase() +
      req.params.division.slice(1).toLowerCase();
    const teams = data.teams.filter((team) => team.division === division);
    res.json(teams);
  } catch (error) {
    res.status(404).send("Division not found");
  }
});

router.get("/conference/:conference", (req, res) => {
  try {
    const conference =
      req.params.conference.charAt(0).toUpperCase() +
      req.params.conference.slice(1).toLowerCase();
    const teams = data.teams.filter((team) => team.conference === conference);
    res.json(teams);
  } catch (error) {
    res.status(404).send("Conference not found");
  }
});

router.post("/teams", (req, res) => {
  try {
    let { name, founded, arena, conference, division, city, nba_titles } =
      req.body;
    if (
      !name ||
      !founded ||
      !arena ||
      !conference ||
      !division ||
      !city ||
      nba_titles < 0
    ) {
      res.status(400).send("Missing fields");
    } else {
      const newTeam = {
        id: data.teams.length + 1,
        name,
        founded,
        arena,
        conference,
        division,
        city,
        nba_titles,
      };
      data.teams.push(newTeam);
      res.send(data);
    }
  } catch (error) {
    res.status(400).send("Bad request");
  }
});

router.put("/teams/:name", (req, res) => {
  try {
    const teamName = req.params.name.toUpperCase();
    const team = data.teams.find(
      (team) => team.name.toUpperCase() === teamName
    );
    const { name, founded, arena, conference, division, city, nba_titles } =
      req.body;
    if (
      !founded ||
      !arena ||
      !conference ||
      !division ||
      !city ||
      nba_titles < 0
    ) {
      res.status(400).send("Missing fields");
    } else {
      team.name = name;
      team.founded = founded;
      team.arena = arena;
      team.conference = conference;
      team.division = division;
      team.city = city;
      team.nba_titles = nba_titles;
      res.send(data);
    }
  } catch (error) {
    res.status(404).send("Team not found");
  }
});

router.delete("/teams/:name", (req, res) => {
  try {
    const name = req.params.name.toUpperCase();
    const teamIndex = data.teams.findIndex(
      (team) => team.name.toUpperCase() === name
    );
    data.teams.splice(teamIndex, 1);
    res.send(data);
  } catch (error) {
    res.status(404).send("Team not found");
  }
});

module.exports = router;
