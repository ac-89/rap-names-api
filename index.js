const express = require("express")
const app = express();
const cors = require("cors")

app.use(cors({
    origin: "https://adorable-yak-pullover.cyclic.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
}))
//use static files
app.use(express.static("public"))



const PORT = 3000

const rappers = {
"21 savage":{
    "age": 29,
    "birthName": "Sheyaa",
    "birthLocation": "London, UK",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/21_Savage_2018.jpg/220px-21_Savage_2018.jpg"
}, "chance the rapper":{
    "age": 28,
    "birthName": "Chancelor Bennett",
    "birthLocation": "Chicago, Illinois",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chance_the_Rapper_2018_February.png/220px-Chance_the_Rapper_2018_February.png"
},"50 cent":{
    "age": 48,
    "birthName": "Curtis James Jackson III",
    "birthLocation": "New York City, U.S.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/50_Cent_in_2018.png/220px-50_Cent_in_2018.png"
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