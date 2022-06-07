const mongoose = require("mongoose");
const Schema = mongoose.Schema

const testRaffleEntrySchema = new Schema({
    raffleId:{ // raffle id
        type: Number,
        require: true
    },
    walletAddress: { // user address
        type: String,
        require: true
    },   
    raffleStartTime:{
        type: String,
        require: true
    }
  

},{timestamp: true}) 


const  testRaffleEntry= mongoose.model('testRaffleEntry', testRaffleEntrySchema)

module.exports = testRaffleEntry