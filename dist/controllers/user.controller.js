import { User } from '../models/User';
import { Thought } from '../models/Thought';
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        // BONUS: delete user's thoughts
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and thoughts deleted' });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
