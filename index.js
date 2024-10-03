const express= require("express");
const courseDetails= require("./courseDetails.json");
 
 

const app=express();
const PORT=process.env.PORT || 5000;
 
 
 
 
app.get("/"  , (req , res)=> {
    res.send(
        [
            {
                id : 1,
                year : 2001,
            }
            ,
            {
                id :2,
                year : 2002,
            }
        ]
    );
});

app.get("/course"  , (req , res)=> {
    res.send(courseDetails);
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
 