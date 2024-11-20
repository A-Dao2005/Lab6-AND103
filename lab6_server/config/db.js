const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://daom5400:rMv3uZEMJqJ5lNa0@cluster0.t5zr4.mongodb.net/Lab5_MD19304_and103";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
