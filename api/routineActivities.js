const express = require('express');
const router = express.Router();

// PATCH /api/routine_activities/:routineActivityId
router.patch('/routine_activities/:routineActivityId', async (req, res, next) => {
    try {
      const { routineActivityId } = req.params;
      const { count, duration } = req.body;
  
      // Check if routine_activity exists
      const routineActivity = await getRoutineActivityById(routineActivityId);
      if (!routineActivity) {
        throw new NotFoundError(`Routine activity ${routineActivityId} not found.`);
      }
  
      // Update routine_activity
      const updatedRoutineActivity = await updateRoutineActivity(routineActivityId, { count, duration });
  
      res.json({ updatedRoutineActivity });
    } catch (err) {
      next(err);
    }
  });
  

// DELETE /api/routine_activities/:routineActivityId

module.exports = router;
