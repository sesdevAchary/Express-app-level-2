const mongoose = require ('mongoose');

const connectDB= async()=>{

    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('connected')
    }

    catch(err)
    {
        console.error("failed to connect ",err);
        process.exit(1);
    }
};
module.exports= connectDB;