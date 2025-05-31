const express = require("express")
const uuid = require("uuid")
const cors = require("cors")

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

const users =[
    {
        id: 1,
        name: "sugathapala",
        approve: true
    },
    {
        id: 2,
        name: "john doily",
        approve: true
    },
    {
        id: 3,
        name: "appuwa",
        approve: true
    },
    {
        id: 4,
        name: "ranethana",
        approve: true
    },
    {
        id: 5,
        name: "bandara",
        approve: true
    },
]

//DEFAULT
app.get("/", (req, res)=>{
    res.json({message:"connected to home"})
})

//GET ALL USER
app.get("/users", (req, res)=>{
    res.json(users)
})

//GET USER
app.get("/users/:id", (req, res)=>{
    console.log(req.params.id)
    let user = users.filter((user)=>user.id == req.params.id)
    res.json({message:"user 1", data:user})
})

//POST
app.post("/users", (req,res)=>{
    console.log(req.body)
    users.push({id: uuid.v4(), ...req.body})
    res.json({message:"add user",data:users})
})

//PUT
app.put("/users/:id", (req, res)=>{
    let user = users.find((user)=>user.id==req.params.id)
    if(user){
        user.name = req.body.name
        user.approve = req.body.approve
        res.json({message:"edited user", data:users})
    }else{
        res.json({message:"somthing went wrong!"})
    }
})

//DELETE
app.delete("/users/:id", (req, res)=>{
    let index = users.findIndex((user)=>user.id==req.params.id)
    users.slice(index, 1)
    res.json({message: "delete user", data:users})
})






app.listen(PORT, ()=>{
    console.log(`app is running on port :${PORT}`)
})