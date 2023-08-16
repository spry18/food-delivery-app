const mongoose = require('mongoose');
const MongoClient = require('mongodb');

const mongoURI = 'mongodb+srv://supriya:gofood@cluster0.uayn2b3.mongodb.net/gofood?retryWrites=true&w=majority';

const dbConnect = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected");

        const db = mongoose.connection.db;
        const collection = db.collection("food_items");
        const collection_food = db.collection("food_category");

        collection.find({}).toArray().then(async (fetched_data) => {
            const food_category = await collection_food.find({}).toArray().then((catData) => {
                console.log('data is fetched');
                global.food_items = fetched_data;
                global.food_category = catData;
            })
        })
    } catch (error) {
        console.log("Error connecting to mongodb:", error)
    }
};

module.exports = dbConnect;




