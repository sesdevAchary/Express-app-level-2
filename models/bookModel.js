const mongoose = require ('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,// add require t make it a mandatory param
        unique: true// add unique condtraint to prevent duplicates
    },
    author:{
        type:String,
        uunique: true
    }
}
);

const BookModel= mongoose.model('Book',bookSchema);
module.exports=BookModel;