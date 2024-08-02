import express from "express";
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getArtist() {
  const query = "SELECT * FROM artist";
  const result = await pool.query(query);
  return result.rows;
}
  //app.get("/artist", async function (req, res) {
    //const artists = await artist();
    //res.status(200).json({ status: "success", data: artist });
  //});
  
  // Query the database and return all resource ones

// Query the database and return the resource with a matching id or null
export async function getArtistById(artist_id) {
  console.log(`Attempting to fetch artist with ID: ${artist_id}`);

  const queryText  = "SELECT * FROM artist where artist_id = $1";
  try {
    const result = await pool.query(queryText, [artist_id]);
    console.log(`Query result:`, result.rows);
    if (result.rows.length === 0){
      return null;
    }
  return result.rows[0];
} catch (error){
  console.log(error);
}}

export async function createArtist(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateArtistById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteArtistId(id) {
  // Query the database to delete the resource and return the deleted resource or null
}