const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

// get the full list of albums
const albumsData = require("./albums");

const app = express();

app.use(express.json());
app.use(cors());



app.get("/albums", (request, response) => {
    response.status(200).send(albumsData);
});


app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
