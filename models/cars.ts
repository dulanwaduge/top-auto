import { Schema, model, models } from 'mongoose';

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: String,
  price: {
    type: Number,
    required: true,
  },
  mileage: Number,
  fuelType: String,
  transmission: String,
});

const Car = model('Car', carSchema);
export default Car;
