const express =require("express")
const app = express();
const port = 4005
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Content = require("./contentschema")

mongoose.set('strictQuery',true);
mongoose.connect("mongodb+srv://Saranya:9703430246@cluster0.3mhygxl.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("MongoDB Connected")
	})
	.catch((err)=>{
		console.log(err)
	})

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	console.log("working server")
})

app.get("/bring",(req,res)=>{
	Content.find()
	.then((result)=> res.json(result))
})

app.post("/add",(req,res)=>{
	//console.log(req.body)
	const {username,password}=req.body;
	const newData = new Content({
		username,password
	})
	newData.save()
	res.send("added")
})

app.listen(port,()=>console.log("port is running"))