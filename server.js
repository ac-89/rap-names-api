const express = require("express")
const app = express();

const PORT = 3000

const rappers = {
"21 savage":{
    "age": 29,
    "birthName": "Sheyaa",
    "birthLocation": "London, UK",
}, "chance the rapper":{
    "age": 28,
    "birthName": "Chancelor Bennett",
    "birthLocation": "Chicago, Illinois",
},"50 cent":{
    "age": 48,
    "birthName": "Curtis James Jackson III",
    "birthLocation": "New York City, U.S.",
}  
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get(`/api`, (req, res) => {
    res.json(rappers)
})

app.get(`/api/:rapperName`, (req, res) =>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json("Bleh")
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log("Hello...")
})