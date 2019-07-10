const express = require("express");
const server = express();
server.use(express.json());

const projects = [];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title, tasks } = req.body;

  projects.push(id, title, tasks);

  return res.json(projects);
});

server.put("/projects/:index", (req, res) => {
  const { index } = req.params;
  const { title, name } = req.body;

  projects[index] = title;

  return res.json(projects);
});

server.delete("/projects/:index", (req, res) => {
  const { index } = req.params;

  projects.splice(index, 1);

  return res.json(projects);
});

server.listen(3000);
