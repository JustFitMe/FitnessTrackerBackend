const express = require('express');
const router = express.Router();
const {getRoutineActivityById, updateRoutineActivity, destroyRoutineActivity, getRoutineById, NotFoundError} = require('../db');
const {requireUser} = require('./utils')


// PATCH /api/routine_activities/:routineActivityId
router.patch('/routine_activities/:routineActivityId', async (req, res, next) => {
    try {
      const { routineActivityId } = req.params;
      const { count, duration } = req.body;
        console.log(count);
      // Check if routine_activity exists
      const routineActivity = await getRoutineActivityById(routineActivityId);
      if (!routineActivity) {
        next({
            error: 'error',
            message: 'User ' + req.user.username + ' is not allowed to update In the evening',
            name: 'UpdateError'
        });
      }
  
      // Update routine_activity
      const updatedRoutineActivity = await updateRoutineActivity({id: routineActivityId, count, duration });
    //   console.log(updatedRoutineActivity);
      res.send( updatedRoutineActivity );
    } catch (err) {
        next({
            error: 'error',
            message: 'User ' + req.user.username + ' is not allowed to update In the evening',
            name: 'UpdateError'
        });
    }
  });

// DELETE /api/routine_activities/:routineActivityId
router.delete('/:routineId', requireUser, async (req, res, next) => {
    const { routineActivityId } = req.params;
    const routineActivity = await getRoutineActivityById(routineActivityId);
    console.log(routineActivity);
    const routine = await getRoutineById(routineActivity.routineId);

    try {
        if (routineActivity && routine.creatorId == req.user.id) {
            await destroyRoutineActivity(routineActivityId);
            res.send(routineActivity);
        } else {
            res.status(403);
            next({
                error: 'error',
                message: 'User ' + req.user.username + ' is not allowed to delete On even days',
                name: 'UpdateError'
            }); 
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;
