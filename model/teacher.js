const mongoose =require('mongoose');

const teaSchema= new mongoose.Schema({
    id:String,
    name:String,
})

const Tea= ('Tea', teaSchema);

module.exports=Tea;