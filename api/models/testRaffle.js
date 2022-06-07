const mongoose = require("mongoose");
const Schema = mongoose.Schema

const testRafflesSchema = new Schema({ 
    raffleNumber:{
        type:Number,
        require: true
    },
    totalWinners :{ // how many ticket will win whitelist
        type: Number,
        require: true
    },
    startedTime:{
        type:String,
        require: true,
    }

},{timestamp: true}) 


const  Raflles= mongoose.model('testFaffles', testRafflesSchema)

module.exports = Raflles