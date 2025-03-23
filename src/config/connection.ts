import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/socialDB');

export default mongoose.connection;
