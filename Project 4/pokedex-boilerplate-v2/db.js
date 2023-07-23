const { Sequelize } = require("sequelize");
const { blue, cyan, green, red } = require("chalk");

// const db = new Sequelize("pokedex", "", "", {
//     host:"localhost",
//     dialect:"postgres",
// });
const db = new Sequelize("postgres://localhost/pokedex");

(async()=>{
    try {
        await db.authenticate();
        console.log(green('Connection has been established successfully.'));
    } catch (error) {
        console.error(red('Unable to connect to the database:'), error);
    }
})();

module.exports = db;