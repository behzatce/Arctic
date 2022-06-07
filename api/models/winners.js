const mongoose = require("mongoose");
const Schema = mongoose.Schema

const WinnersSchema = new Schema({
    raffleId:{ // raffle id
        type: Number,
        ref:'raffles',
        require: true
    },
    userWallet: [],   
    entryCount :{ // user bought ticker count
        type: Number,
        require: true,
    },

},{timestamp: true}) 


const  winners= mongoose.model('winners', WinnersSchema)

module.exports = winners