import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    toJSON: { virtuals: true },
    id: false
});
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
export const User = model('User', userSchema);
