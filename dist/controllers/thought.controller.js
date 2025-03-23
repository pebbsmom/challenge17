import { Thought } from '../models/Thought';
import { User } from '../models/User';
export const getThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought)
            return res.status(404).json({ message: 'Thought not found' });
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const { thoughtText, username, userId } = req.body;
        const thought = await Thought.create({ thoughtText, username });
        await User.findByIdAndUpdate(userId, { $push: { thoughts: thought._id } });
        res.status(201).json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!thought)
            return res.status(404).json({ message: 'Thought not found' });
        res.json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought)
            return res.status(404).json({ message: 'Thought not found' });
        // Optional: remove reference from user's thoughts array
        await User.findOneAndUpdate({ thoughts: req.params.id }, { $pull: { thoughts: req.params.id } });
        res.json({ message: 'Thought deleted' });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true });
        if (!thought)
            return res.status(404).json({ message: 'Thought not found' });
        res.json(thought);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!thought)
            return res.status(404).json({ message: 'Thought not found' });
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
