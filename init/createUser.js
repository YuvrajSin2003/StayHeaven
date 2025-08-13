const mongoose = require("mongoose");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    // Create a default user
    const defaultUser = new User({
        email: "admin@wonderlust.com",
        username: "Wonderlust Admin"
    });

    try {
        await defaultUser.save();
        console.log("Default user created:", defaultUser._id);
        console.log("You can use this ID in your listings initialization");
    } catch (error) {
        console.log("User might already exist or error:", error.message);
    }

    mongoose.connection.close();
}

main().catch(console.log); 