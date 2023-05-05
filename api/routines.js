const express = require('express');
const { getAllPublicRoutines, createRoutine, getRoutineById, updateRoutine } = require('../db');
// const { route } = require('./activities');
// const {requireUser} = require('./utils')
const router = express.Router();

// GET /api/routines

router.get('/', async (req, res, next) => {
    try {
        const allPublicRoutines = await getAllPublicRoutines();
        res.send(allPublicRoutines);
    } catch (error) {
        next(error);
    }
})

router.post('/', requireUser, async (req, res, next) => {
    try {
        const {isPublic, name, goal} = req.body;
        const routineData = {};

        routineData.creatorId = req.user.id;
        routineData.isPublic = isPublic;
        routineData.name = name;
        routineData.goal = goal;

        const routine = createRoutine(routineData);
        res.send(routine);
    } catch (error) {
        next(error);
    }
});

router.patch('/:routineId', async (req, res, next) => {
    const {routineId} = req.params;
    const fields = req.body;
    // const routine = await getRoutineById(routineId);
    try {
        
        const updatedRoutine = updateRoutine({id: routineId, fields})
        res.send(updatedRoutine);
    } catch (error) {
        next(error);
    }
})

// POST /api/routines

// PATCH /api/routines/:routineId

// DELETE /api/routines/:routineId

// POST /api/routines/:routineId/activities

module.exports = router;
