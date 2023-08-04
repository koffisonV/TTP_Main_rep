require("dotenv").config();
const PORT = process.env.PORT || 8081;
const server = require("./index");
const { db } = require("./db");


const init = async () => {
  try {
    await db.sync();
    server.listen(PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();

// After running "npm install", create a ".env" file in your main project directory and copy everything below (make sure to change database name to your database name - make sure to remove the //) into the ".env" file.

// JWT=cipherkey
// DATABASE_URL=postgres://localhost:5432/User_Test
// PORT=8080