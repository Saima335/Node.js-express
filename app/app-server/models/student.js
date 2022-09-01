var mongoose=require('mongoose');
var stSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    rollno:String
})
module.exports=mongoose.model('Student',stSchema);