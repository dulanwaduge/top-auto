// import { MongoClient } from "mongodb";
// import mongoose from "mongoose";

// const uri = 'mongodb+srv://admin:topautoadmin@topauto-cluster.l1315mg.mongodb.net/?retryWrites=true&w=majority';
// const db = mongoose.connection;

// export async function connectDatabase() {
//     mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

//     db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//     db.once('open', () => {
//         console.log('Connected to MongoDB');
//     });
// }


// export async function addCar(){
//     db.on('error', (err) => {
//         console.error(`Connection error: ${err}`);
//       });
      
//       db.once('open', async () => {
//         try {
//           // Create a new car
//           const newCarData: Car = {
//             make: 'Toyota',
//             model: 'Camry',
//             year: 2023,
//             color: 'Blue',
//             price: 25000,
//             mileage: 15000,
//             fuelType: 'Gasoline',
//             transmission: 'Automatic',
//           };
      
//           const newCar = new Car(newCarData);
      
//           // Save the new car to the database
//           const savedCar = await newCar.save();
      
//           console.log('Car added successfully:');
//           console.log(savedCar);
      
//           // Close the database connection
//           mongoose.connection.close();
//         } catch (error) {
//           console.error(`Error adding car: ${error}`);
//         }
//     });
// }
