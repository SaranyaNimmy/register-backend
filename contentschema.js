const mongoose = require("mongoose")

const contentSchema= new mongoose.Schema({
	username:String,
	password:String,
},{collection:"login"})
const Content=mongoose.model("",contentSchema)

module.exports = Content