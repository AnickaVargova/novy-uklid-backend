import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import tyden from "./cinnostiTyden";
import pololeti from "./cinnostiPololeti";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/tyden", (req, res) => {
  fs.writeFileSync(
    path.join(__dirname, "aktualni.json"),
    JSON.stringify(tyden)
  );
  res.send(tyden);
});

app.get("/aktualni", (req, res) => {
  const todosPath = path.join(__dirname, "aktualni.json");
  const loadedData = fs.readFileSync(todosPath);
  res.send(loadedData);
});

app.get("/pololeti", (req, res) => {
  fs.writeFileSync(
    path.join(__dirname, "pololetiAktualni.json"),
    JSON.stringify(pololeti)
  );
  res.send(pololeti);
});

app.get("/pololetiAktualni", (req, res) => {
  const todosPath = path.join(__dirname, "pololetiAktualni.json");
  const loadedData = fs.readFileSync(todosPath);
  res.send(loadedData);
});

app.post("/aktualni", (req, res) => {
  const todosPath = path.join(__dirname, "aktualni.json");
  fs.writeFileSync(todosPath, JSON.stringify(req.body));
  res.send(req.body);
});

app.post("/pololetiAktualni", (req, res) => {
  const todosPath = path.join(__dirname, "pololetiAktualni.json");
  fs.writeFileSync(todosPath, JSON.stringify(req.body));
  res.send(req.body);
});

app.listen(3001);
