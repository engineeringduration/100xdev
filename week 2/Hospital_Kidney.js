const { Console } = require("console");
const express = require("express")
const app = express()

var users=[
    {
        name:'john',
        kidenys:[{
            healthy : true
        }

        ]
    }
]

app.get("/",(req,res)=>{
    const noOfKideny= users[0].kidenys.length;
    var StatusOfKidey=""
    var noOfHealthyKideny=0;
    let p=1;
    for(let i=0;i<noOfKideny;i++){
    if(users[0].kidenys[i].healthy){
        StatusOfKidey ="Healthy"
        console.log(p++)
        noOfHealthyKideny++
    }else{
        StatusOfKidey ="Unhealthy"
    }}
    console.log(`Status of Kideny: ${StatusOfKidey}`)
    res.json(
        {
            "Status of Kideny":StatusOfKidey,
            "No of Kideny":noOfKideny,
            "No of Healthy Kideny":noOfHealthyKideny
            
        }
    ) 

})




app.delete("/",(req,res)=>{ //to delete the unhealthy kidney
    //lets check  is there any unhealtyhy kideney to remove or not
    if(isthrerAtleastUnhealthyKidney()){

        const newKideney =[]
        for(let i=0;i<users[0].kidenys.length;i++){
            if(users[0].kidenys[i].healthy){
                newKideney.push(users[0].kidenys[i])
            }
        }
        users[0].kidenys=newKideney
        res.json({msg:"Deleted unhealthy kideneys successful"})
    }else{
        res.status(411).json({
            msg:"You dont have any unhealthy kideney to delete or remove "
        });
    }
})

function isthrerAtleastUnhealthyKidney(){
    let atleastUnhealthyKidney =false;
    for(let i=0;i<users[0].kidenys.length;i++){
        if(!users[0].kidenys[i].healthy){
            atleastUnhealthyKidney=true;
        }
    }
    return atleastUnhealthyKidney
}

app.put("/",(req,res)=>{ //to upgrade and update the kidney to the healthy..
    if(isthrerAtleastUnhealthyKidney()){

        for(let i=0;i<users[0].kidenys.length;i++){
            users[0].kidenys[i].healthy=true
        }
        res.json({
            "Status":"Updated"
        })
    }else{
        res.status(411).json({
            msg:"You dont have any unhealthy kideney to upgrade to healthy"
        });
    }
    
})


app.post("/",(req,res)=>{
    req.query.healthy //here we can use the req.body to access the data from the body of the request (large data)
    users[0].kidenys.push({healthy:req.query.healthy})
    res.json({
        "Status":"new kideny added"
        })
    console.log("post requesrrs")
    
})

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})


