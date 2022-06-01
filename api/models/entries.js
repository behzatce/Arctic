const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EntrySchema = new Schema({
    raffleId:{ // raffle id
        type: Schema.ObjectId,
        ref:'raffles',
        require: true
    },
    user: { // user address
        type: String,
        require: true
    },   
    entryCount :{ // user bought ticker count
        type: Number,
        require: true,
    },

},{timestamp: true}) 


const  userEntry= mongoose.model('entries', EntrySchema)

module.exports = userEntry