// Import the required modules
import express from "express";



import {
  getArtist,
  getArtistById,
  createArtist,
  updateArtistById,
  deleteArtistId,
} from "./Artist.js";


import {
  getResourceTwo,
  getResourceTwoById,
  createResourceTwo,
  updateResourceTwoById,
  deleteResourceTwoById,
} from "./Albums.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/Artist/", async function (req, res) {
  try {
    const artist = await getArtist();
    res.status(200).json({ status: "success", payload:artist });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: err.message });
  }
    
});

// Endpoint to retrieve a <resource_one> by id
app.get("/Artist/:id", async function (req, res) {
  try {
    const artist = await getArtistById(req.params.id);
    res.status(200).json({ status: "success", payload:artist});
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: err.message });
  }
});

// Endpoint to create a new <resource_one>
app.post("/Artist/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/Artist/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/Artist/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/Album/", async function (req, res) {
    const authors = await getAuthors();
    res.status(200).json({ status: "success", data: authors });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/Album/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/Album/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/Album/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/Album/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});