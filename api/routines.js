const express = require('express');
const { getAllPublicRoutines, createRoutine, getRoutineById, updateRoutine, getUserById } = require('../db');
// const { route } = require('./activities');
const {requireUser} = require('./utils')
const router = express.Router();

const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { JWT_SECRET } = process.env;
router.use(async (req, res, next) => {
    console.log("A request has been made to /routines");

    const prefix = "Bearer ";
    const auth = req.header("Authorization");
    try {
        if (!auth) {
            next();
        } else if (auth.startsWith(prefix)) {
            const token = auth.slice(prefix.length)
            const { id } = jwt.verify(token, JWT_SECRET);

            if (id) {
                req.user = await getUserById(id);
                
                console.log('user -----------------> ', req.user);
                res.send(req.user);
            }
        }
    }
    catch (error) {
        next(error);
    }
})
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
    console.log('user -----------------> ', req.user);
    // try {
    //     const {isPublic, name, goal} = req.body;
    //     // const routineData = {};
    //     // routineData.creatorId = req.user.id;
    //     // routineData.isPublic = isPublic;
    //     // routineData.name = name;
    //     // routineData.goal = goal;
    //     const routine = createRoutine({creatorId: req.user.id, isPublic, name, goal});
    //     res.send(routine);
    // } catch (error) {
    //     next(error);
    // }
});
router.patch('/:routineId', async (req, res, next) => {
    // const {routineId} = req.params;
    // const fields = req.body;
    // // const routine = await getRoutineById(routineId);
    // try {
    //     const updatedRoutine = updateRoutine({id: routineId, fields})
    //     res.send(updatedRoutine);
    // } catch (error) {
    //     next(error);
    // }
})
router.delete('/:routineId', async (req, res, next) => {
    // const {routineId} = req.params;
    // try {
    //     const routine = await getRoutineById(routineId);
    // } catch (error) {
    //     next(error);
    // }
})
// POST /api/routines
// PATCH /api/routines/:routineId
// DELETE /api/routines/:routineId
// POST /api/routines/:routineId/activities
module.exports = router;