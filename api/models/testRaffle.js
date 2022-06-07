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
    },
    isPast:{
        type:Boolean,
        default:false
    }

},{timestamp: true}) 


const  Raflles= mongoose.model('testRaffles', testRafflesSchema)

module.exports = Raflles