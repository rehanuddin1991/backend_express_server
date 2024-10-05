const express= require("express");
const cors= require("cors");
const courseDetails= require("./courseDetails.json");
const app=express();
const PORT=process.env.PORT || 5000;
app.use(cors()); 
 

app.get("/"  , (req , res)=> {
    res.send(
        "congratutations! backend server running"
    );
});

app.get("/course"  , (req , res)=> {
    res.json(courseDetails);
});

 

app.get('/course/:id', (req, res)=>{
    var singleCourse = courseDetails.filter(function(course){
        let inputCourseId;
        if(req.params.id.length==1){  inputCourseId="0" + req.params.id;}
        else {  inputCourseId=req.params.id;}
        
       if(course.course_id == inputCourseId){
          return true;
       }
    });
    if(singleCourse.length == 1){
       res.json(singleCourse[0])
    } else {
       
       res.send({message: "Not Found"});
    }
 });




const start = async ()=>
{
try {
    app.listen(PORT , ( )=> {
        console.log(`${PORT} yes i am connectedd`)
    })
    
} catch (error) { console.log(23)
    
}
};
start();
 
