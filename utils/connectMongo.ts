import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const uri = "mongodb+srv://admin:topautoadmin@topauto-cluster.l1315mg.mongodb.net/vehicles?retryWrites=true&w=majority";
const connectMongo = async () => mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default connectMongo;