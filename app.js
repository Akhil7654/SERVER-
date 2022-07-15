const express=require("express");
const app=express();
courseList=[
    {
        "courseTitle":"React",
        "courseDescription":"React Course",
        "courseDuration":"4 Months",
        "courseDate":"2022-05-07",
        "courseVenue":"ONLINE"
    },

{

        "courseTitle":"Angular",
        "courseDescription":"Angular Course",
        "courseDuration":"8 Months",
        "courseDate":"2022-02-25",
        "courseVenue":"OFFLINE"

},

{

    "courseTitle":"Python",
    "courseDescription":"Python Course",
    "courseDuration":"1 year",
    "courseDate":"2022-6-25",
    "courseVenue":"ONLINE & OFFLINE"

},

{

    "courseTitle":"Node JS",
    "courseDescription":"Node Course",
    "courseDuration":"7 Months",
    "courseDate":"2022-6-12",
    "courseVenue":"OFFLINE"
}   
]


app.get("/getcourses",function(req,res){
res.send(courseList);
}
)
app.post("/addcourse",function(req,res){
console.log(req.body);
courseList.push(req.body);
res.status(200).send(courseList);
}
)


app.listen(3000);