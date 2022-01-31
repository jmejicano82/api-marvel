const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/settings');
        console.log("Connection successfull");
    } catch {
        console.log("Error connection");
    }
}

module.exports = {
    connection
} 
