"use strict";
const router = require("express").Router();
const { default: axios } = require("axios");
const { db } = require("../db")
const { Students, Campuses } = require("../db/index")

// require your database and place your routes here
// Campus routes
router.get("/campuses", async (req, res, next) => {
    try{
        const campuses = await Campuses.findAll();
        res.send(campuses);
    }catch(error){
        next(error);
    }
});

router.get("/campuses/:id", async (req, res, next) => {
    try{
        const campus = await Campuses.findOne({
            where: {id: req.params.id},
            include: Students,
        })
        res.send(campus);
    } catch(error){
        next(error);
    }
});

router.post("/campuses", async (req, res, next) => {
    try{
        const newCampus = await Campuses.create(req.body);
        res.send(newCampus);
    }catch(error){
        next(error);
    }
});

router.put("/campuses/:id", async (req,res,next) => {
    try{
        const campus = await Campuses.findByPk(req.params.id);
        if(campus){
            await campus.update(req.body);
            res.json(campus);
        }
    } catch(error){
        next(error);
    }
})

router.delete("/campuses/:id", async (req, res, next) => {
    try{
        const campus = await Campuses.findByPk(req.params.id);
        if(campus){
            await campus.destroy();
            res.status(204).send("Campus removed");
        }
    } catch(error){
        next(error);
    }
})

// Students routes
router.get("/students", async (req, res, next) => {
    try{
        const students = await Students.findAll();
        res.send(students);
    } catch(error){
        next(error);
    }
})

router.get("/students/:id", async (req, res, next) => {
    try{
        const student = await Students.findOne({
            where: {id: req.params.id},
            include: Campuses,
        })
        res.send(student);
    } catch(error){
        next(error);
    }
});

router.post("/students", async (req, res, next) => {
    try{
        const newStudent = await Students.create(req.body);
        res.send(newStudent);
    }catch(error){
        next(error);
    }
});

router.put("/students/:id", async (req,res,next) => {
    try{
        const student = await Students.findByPk(req.params.id);
        if(student){
            await student.update(req.body);
            res.json(student);
        }
    } catch(error){
        next(error);
    }
})

router.delete("/students/:id", async (req, res, next) => {
    try{
        const student = await Students.findByPk(req.params.id);
        if(student){
            await student.destroy();
            res.status(204).send("Campus removed");
        }
    } catch(error){
        next(error);
    }
})

module.exports = router;
