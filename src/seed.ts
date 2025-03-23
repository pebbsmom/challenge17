import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './models/User.js';
import { Thought } from './models/Thought.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.insertMany([
      { username: 'alice', email: 'alice@email.com' },
      { username: 'bob', email: 'bob@email.com' },
      { username: 'charlie', email: 'charlie@email.com' }
    ]);

    const thoughts = await Thought.insertMany([
      { thoughtText: 'Hello world!', username: 'alice' },
      { thoughtText: 'Learning the MERN stack!', username: 'bob' },
      { thoughtText: 'MongoDB is fun!', username: 'charlie' }
    ]);

   
    for (let i = 0; i < thoughts.length; i++) {
      const user = users.find(u => u.username === thoughts[i].username);
      if (user) {
        user.thoughts.push(thoughts[i]._id);
        await user.save();
      }
    }

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
