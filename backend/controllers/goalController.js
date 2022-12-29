const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc: Get goals
// @route: GET /api/goals
// @access: Public
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({});
    res.json(goals);
});

// @desc: Set goals
// @route: POST /api/goals
// @access: Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please a text field');
    }
    const goal = await Goal.create(req.body);
    res.status(201).json(goal);
});

// @desc: Update goals
// @route: PUT /api/goals/:id
// @access: Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedGoal);
});

// @desc: Delete goals
// @route: DELETE /api/goals/:id
// @access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }

    await goal.remove();
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal,
};
