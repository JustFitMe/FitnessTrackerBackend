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
  router.delete('/routine_activities/:routineActivityId', requireUser, async (req, res, next) => {
    const { routineActivityId } = req.params;
    const routineActivity = await getRoutineActivityById(routineActivityId);
    const routine = await getRoutineById(routineActivity.routineId);
  
    try {
      if (!routineActivity) {
        throw new NotFoundError('Routine activity not found');
      }
  
      if (routine.creatorId !== req.user.id) {
        res.status(403);
        throw new Error('Only the owner of the routine can delete a routine activity');
      }
  
      await destroyRoutineActivity(routineActivityId);
      res.send(routineActivity);
    } catch (error) {
      next(error);
    }
  });
  

module.exports = router;