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

app.get("/albums/:id", (request, response) => {
    // req.params.albumId will match the value in the url after /albums/
    console.log(req.params.albumId);
    // now we can use the value for req.params.albumId to find the album requested
    // how do we "find" something in an array

    // finish the code yourself - it should end with res.send(album) where album is the single album you found  based on the id
});

app.post("/albums", function (req, res) {
    console.log("POST /albums route");
    console.log(req.body);
    // insert code to add the body object to the albums array
});


// notice .delete
app.delete("/albums/:albumID", function (req, res) {
    console.log("DELETE /albums route");
    // insert code to delete album with specified ID from the array
});

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
