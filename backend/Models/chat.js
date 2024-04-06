import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
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

export default model('Chat', chatSchema);