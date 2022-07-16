const express=require("express");
const CourseDate=require('./src/model/CourseData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//courseList=[
//     {
//         "courseTitle":"React",
//         "courseDescription":"React Course",
//         "courseDuration":"4 Months",
//         "courseDate":"2022-05-07",
//         "courseVenue":"ONLINE"
//     },

// {

//         "courseTitle":"Angular",
//         "courseDescription":"Angular Course",
//         "courseDuration":"8 Months",
//         "courseDate":"2022-02-25",
//         "courseVenue":"OFFLINE"

// },

// {

//     "courseTitle":"Python",
//     "courseDescription":"Python Course",
//     "courseDuration":"1 year",
//     "courseDate":"2022-6-25",
//     "courseVenue":"ONLINE & OFFLINE"

// },

// {

//     "courseTitle":"Node JS",
//     "courseDescription":"Node Course",
//     "courseDuration":"7 Months",
//     "courseDate":"2022-6-12",
//     "courseVenue":"OFFLINE"
// }   
// ]


// app.get("/getcourses",function(req,res){
// res.send(courseList);
// }
// )
// app.post("/addcourse",function(req,res){
// console.log(req.body);
// courseList.push(req.body);
// res.status(200).send(courseList);
// }
// )




app.get('/getcourses',function(req,res){

CourseDate.find().then(function(courses){

           console.log(courses);
           res.send(courses);

})

})

app.post('/addcourse',function(req,res){
var item={
   
    courseTitle:req.body.courseTitle,
    courseDescription:req.body.courseDescription,
    courseDuration:req.body.courseDuration,
    courseDate:req.body.courseDate,
    courseVenue:req.body.courseVenue

         }

var course=CourseDate(item);
course.save();

CourseDate.find()
.then(function(course){
     res.send(course);

})

})
app.put('/update/:id',function(req,res){

const id=req.params.id;
courseTitle=req.body.courseTitle;
courseDescription=req.body.courseDescription;
courseDuration=req.body.courseDuration;
courseDate=req.body.courseDate;
courseVenue=req.body.courseVenue;

CourseDate.findByIdAndUpdate({"_id":id},
{$set:{"courseTitle":courseTitle,
"courseDescription":courseDescription,
"courseDuration":courseDuration,
"courseDate":courseDate,
"courseVenue":courseVenue
}}).then(function(){
    res.send("Updated")});

}

)


app.listen(3000);