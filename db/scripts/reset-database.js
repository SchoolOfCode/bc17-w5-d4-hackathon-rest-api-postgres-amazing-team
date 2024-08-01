import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<



async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS artist CASCADE;
        DROP TABLE IF EXISTS albums CASCADE;
    `);

    // Create the artists table
    await pool.query(`
    CREATE TABLE Artist (
    artist_ID INT PRIMARY KEY,
    Name VARCHAR(255)
);

  `);

    // Create the albums table with a foreign key to the artists table
    await pool.query(`
      CREATE TABLE Albums (
        AlbumID INT PRIMARY KEY,
        Title VARCHAR(255),
        published_date DATE,
        artist_id INT,
        FOREIGN KEY (artist_ID) REFERENCES Artist(artist_ID)
      );
    `);
    

    // Seed the artists table
    await pool.query(`
        INSERT INTO Artist (artist_ID, name)
        VALUES 
            (1, 'Dua Lipa'),
            (2, 'Jay-Z');
    `);

    // Seed the albums table
    await pool.query(`
        INSERT INTO albums (AlbumID, title, published_date, artist_id)
        VALUES 
            (1,'Dua Lipa', '2017-06-02', 1),
            (2,'Future Nostalgia', '2020-03-27', 1),
            (3,'Reasonable Doubt', '1996-06-25', 2),
            (4,'The Blueprint', '2001-09-11', 2);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
