// Description: This file contains the goal model schema
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        text: {
            type: String,
            required: [true, 'Please add some text'],
            trim: true,
            maxlength: [150, 'Text cannot be more than 150 characters'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Goal', goalSchema);
