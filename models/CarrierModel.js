import mongoose from 'mongoose';

const carrierSchema = new mongoose.Schema({
  company_name: String,
});

const Carrier = mongoose.model('Carrier', carrierSchema);

export default Carrier;
