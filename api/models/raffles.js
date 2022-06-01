const mongoose = require("mongoose");
const Schema = mongoose.Schema

const rafflesSchema = new Schema({
    projectId:{ // project id
        type: Schema.ObjectId,
        ref:'projects',
        require: true
    },
    ticketPrice: { // ticket price of project
        type: Number,
        require: true
    },   
    totalWinners :{ // how many ticket will win whitelist
        type: Number,
        require: true
    },
    startedTime:{
        type:Number,
        require: true,
        default:Date.now
    }

},{timestamp: true}) 


const  Raflles= mongoose.model('raffles', rafflesSchema)

module.exports = Raflles