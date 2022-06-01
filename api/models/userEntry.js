const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserEntrySchema = new Schema({
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
    isWin:{ // user is win ?
        type: Boolean,
        require: true,
        default: false
    },

},{timestamp: true}) 


const  userEntry= mongoose.model('userEntry', UserEntrySchema)

module.exports = userEntry