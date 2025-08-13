const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: '686ac7e83aa281048e41b320',
        geometry: {
            type: "Point",
            coordinates: [0, 0] // Default coordinates, will be updated by geocoding
        }
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");

    mongoose.connection.close();
}

main().catch(console.log);
