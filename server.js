const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

// get the full list of albums
const albumsData = require("./albums");

const app = express();

app.use(express.json());
app.use(cors());

// Get an ID number that hasn't already been used in albums
function newID() {
  // Get list of IDs
  let ids = albumsData.map((el) => el.albumId).sort();
  let nextId = 1;
  // check if id string is taken
  while (ids.includes(`${nextId}`)) {
    nextId++;
  }
  return String(nextId);
}

app.get("/albums", (request, response) => {
  response.status(200).send(albumsData);
});

app.get("/albums/:id", (request, response) => {
  response
    .status(200)
    .send(albumsData.find((album) => album.albumId === request.params.id));
});

app.get("/albums/search", (request, response) => {
  const artistName = request.query.artistName.toLowerCase();
  const searchResult = albumData.filter((album) => {
    if (album.artistName.toLowerCase() === artistName) {
      return true;
    }
  });
});

app.post("/albums", (request, response) => {
  let newAlbum = request.body;
  if (newAlbum.artistName === undefined) {
    response.status(400).send("The artist must have a name");
  } else {
    newAlbum.albumId = newID();
    albumsData.push(newAlbum);
    response.sendStatus(201);
  }
});

app.delete("/albums/:id", (request, response) => {
  let id = request.params.id;
  if (id && parseInt(id) != Nan) {
  } else {
  }
  let index = albumsData.findIndex((album) => album.albumId === id);
  albumsData.splice(index, 1);
});

//app.put("/albums/:id", (request, response) => {});

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
