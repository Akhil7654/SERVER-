const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://AKHIL:youloveme007@cluster0.5qzwyoy.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const CourseSchema=new Schema({

    courseTitle:String,
    courseDescription:String,
    courseDuration:String,
    courseDate:String,
    courseVenue:String

});
var CourseDate=mongoose.model("courseset",CourseSchema);
module.exports=CourseDate;