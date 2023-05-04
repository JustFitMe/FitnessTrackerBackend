/* eslint-disable no-useless-catch */
const express = require("express");
const usersRouter = express.Router();

const { getUserByUsername, createUser, getUserById, getUser } = require('../db/users');
const { getPublicRoutinesByUser, getAllRoutinesByUser } = require('../db/routines');
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { JWT_SECRET } = process.env;

// POST /api/users/register
usersRouter.post("/register", async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const _user = await getUserByUsername(username);

        if (_user) {
            throw new Error("User " + _user.username + " is already taken.")
        }
        if (password.length < 8) {
            throw new Error ("Password Too Short!")
        }

        const user = await createUser({
            username,
            password
        });

        const token = jwt.sign({
            id: user.id,
            username
        }, process.env.JWT_SECRET, {
            expiresIn: "1w"
        });

        res.send({
            message: "You Successfully Registered!",
            user,
            token,
        });
    }
    catch ({ name, message }) {
        res.send({
            message: message,
            error: 'error',
            name,
        });
    }
});
// POST /api/users/login


// GET /api/users/me

// GET /api/users/:username/routines

module.exports = router;
