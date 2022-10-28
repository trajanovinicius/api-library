const mongoose = require("mongoose");
require("dotenv/config");

module.exports = {
    connect() {
        try {
            mongoose.connect(`mongodb+srv://trajanovinicius:${process.env.PASSWORD}@programming.xb9tnwb.mongodb.net/test`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(console.log("Database connected"));
        } catch (error) {
            console.log(error)
        }
    },
};
