const mongoose = require("mongoose");
const Schema = mongoose.Schema

const projectSchema = new Schema({
    avatar:{ // discord pp url
        type: String,
        require: true
    },
    name :{ // project name
        type: String,
        require: true
    },
    description :{ // project description
        type: String,
        require: true
    },
    socialMediaHandles: { // social media accounts url
        type: Map,
        of: String
    },   
    mintDate :{ // project mint date
        type: String, 
        require: true,
        
    },
    mintPrice :{ // project mint price
        type: Number,
        require: true
    },
    supply:{ // project supply
        type: Number,
        require: true
    },
    isWlActive :{ // whitelist process continue?
        type: Boolean,
        require: true
    },

},{timestamp: true}) 


const Project = mongoose.model('projects', projectSchema)

module.exports = Project