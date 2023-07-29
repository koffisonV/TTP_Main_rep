const router = require("express").Router();
const { db } = require("../db");
const { Pokemon, Trainer } = require("../db/index")

// Connect your API routes here!
// Pokemons routes
router.get("/pokemons", async (req,res,next) => {
    try {
        const pokemons = await Pokemon.findAll();
        res.send(pokemons);
    } catch (error) {
        next(error);
    }
});

router.get("/pokemons/:id", async (req,res,next) => {
    try{
        const pokemon = await Pokemon.findOne({
            where: { id: req.params.id },
            include: Trainer,
        });
        res.send(pokemon);
    } catch (error){
        next(error);
    }
});

router.post("/pokemons", async (req,res,next) =>{
    try{
        const newPokemon = await Pokemon.create(req.body);
        res.send(newPokemon);
    } catch(error){
        next(error);
    }
});

router.put("/pokemons/:id", async (req,res,next) => {
    try{
        const pokemon = await Pokemon.findByPk(req.params.id);
        if(pokemon){
            await pokemon.update(req.body);
            res.json(pokemon);
        }
    } catch(error){
        next(error);
    }
});

router.delete("/pokemons/:id", async (req,res,next) => {
    try{
        const pokemon = await Pokemon.findByPk(req.params.id);
        if(pokemon){
            await pokemon.destroy();
            res.status(204).send("Pokemon removed");
        }
    } catch(error){
        next(error);
    }
});

// Trainers routes
router.get("/trainers", async (req,res,next) => {
    try {
        const trainers = await Trainer.findAll();
        res.send(trainers);
    } catch (error) {
        next(error);
    }
});

router.get("/trainers/:id", async (req,res,next) => {
    try{
        const trainer = await Trainer.findOne({
            where: { id: req.params.id },
            include: Pokemon,
        });
        res.send(trainer);
    } catch (error){
        next(error);
    }
});

router.post("/trainers", async (req,res,next) =>{
    try{
        const newTrainer = await Trainer.create(req.body);
        res.send(newTrainer);
    } catch(error){
        next(error);
    }
});

router.put("/trainers/:id", async (req,res,next) => {
    try{
        const trainer = await Trainer.findByPk(req.params.id);
        if(trainer){
            await trainer.update(req.body);
            res.json(trainer);
        }
    } catch(error){
        next(error);
    }
});

router.delete("/trainers/:id", async (req,res,next) => {
    try{
        const trainer = await Trainer.findByPk(req.params.id);
        if(trainer){
            await trainer.destroy();
            res.status(204).send("Trainer deleted");
        }
    } catch(error){
        next(error);
    }
});

module.exports = router;
