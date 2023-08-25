import mongoose from 'mongoose';

const lobSchema = new mongoose.Schema({
  category_name: String,
});

const LOB = mongoose.model('LOB', lobSchema);

export default LOB;
