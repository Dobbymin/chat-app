// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id: {
                type: Schema.ObjectId,
                ref: 'User',
            },
            name: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Chat', chatSchema);
