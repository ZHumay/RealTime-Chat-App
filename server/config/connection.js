const { default: mongoose } = require("mongoose");


const connection = {
    connect: async () => {
        try {
            await mongoose.connect(process.env.CONNECTION)
            console.log('CONNECTED!');
        } catch (error) {
            console.log('ERROR', error);
        }
    }
}

module.exports = { 
    connection }