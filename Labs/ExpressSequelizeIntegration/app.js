require("dotenv").config();
const express = require("express");
const Sequelize = require("sequelize");
const PORT = 1337;

const app = express();
const sequelize = new Sequelize(process.env.DATABASE_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Student = sequelize.define("student", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

const Course = sequelize.define("course", {
    course_name: Sequelize.STRING,
    course_code: Sequelize.STRING,
});

Student.belongsToMany(Course, { through: "StudentCourses" });
Course.belongsToMany(Student, { through: "StudentCourses" });

(async ()=>{
    try{
        await sequelize.sync();
        console.log("Models synced with database");

    }catch(err){
        console.error(err)
    }
})();

app.get("/students", async (req,res)=>{
    try{
        const students = await Student.findAll();
        res.json(students);
    }catch(err){
        console.error(err);
    }
});

app.post("/students", async (req,res) =>{
    try{
        const student = await Student.create(req.body);
        res.json(student);
    }catch(err){
        console.error(err);
    }
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});