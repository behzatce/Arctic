const mongoose = require("mongoose");
const Schema = mongoose.Schema

const preProjectSchema = new Schema({
    name:{ // project name
        type: String,
        require: true
    },
    supply : {
        type: Number,
        require : true
    },
    socialMediaHandles: { // socil media address
        type: Map,
        of: String
    },   
    contact :{ // project contact
        type: String,
        require: true
    },
    wlSupplyCap:{ // project wl supply
        type: Number,
        require: true
    },
    arcticWlAlloc: { // given wl spot to arctic
        type: Number,
        require: true
    },
    isAccept:{
        type: Boolean,
        require: true,
        default: false
    }
},{timestamp: true}) 


const  Apply= mongoose.model('applies', preProjectSchema)

module.exports = Apply