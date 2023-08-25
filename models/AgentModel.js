import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
    agent: String
});

const Agent = mongoose.model('Agent', agentSchema);

export default Agent;
