import { Schema, model, Types } from 'mongoose';
import { formatDate } from '../utils/dateFormat.js';

const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, get: formatDate }
}, {
  toJSON: { getters: true },
  id: false
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now, get: formatDate },
  username: { type: String, required: true },
  reactions: [reactionSchema]
}, {
  toJSON: { virtuals: true, getters: true },
  id: false
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

export const Thought = model('Thought', thoughtSchema);
