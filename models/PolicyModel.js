import mongoose from 'mongoose';

const policySchema = new mongoose.Schema({
  producer:String,
  policy_number: String,
  premium_amount_written: String,
  premium_amount: Number,
  policy_type: String,
  policy_start_date: Date,
  policy_end_date: Date,
  csr:String
});

const Policy = mongoose.model('Policy', policySchema);

export default Policy;
