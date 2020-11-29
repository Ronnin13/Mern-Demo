const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongodb");

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("SUCCESSFULLY CONNECTED TO DB");
    } catch (e) {
        console.log("FAILED TO CONNECT TO MONGO DB WITH ERROR: ", e);
        process.exit(1);
    }
};

module.exports = connectDB;
