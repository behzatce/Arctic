const Raffles = require('../models/raffles')
const Projects = require('../models/projects')
const Entries = require('../models/userEntry')
var ObjectId = require('mongodb').ObjectID;
const {getEntries} = require('./userEntry')

 const addRaffle = (rafflesData) => {
    const raffles = new Raffles({
        projectId : rafflesData.projectId,
        ticketPrice : rafflesData.ticketPrice,
        totalWinners : rafflesData.totalWinners,
        totalTicketSold : 0,
    })
    return raffles
}


const getRaffleAllProjects = () => {
    const raffleProjects = Raffles.aggregate([{
        $lookup: {
            from: "projects", // collection name in db
            localField: "projectId",
            foreignField: "_id",
            as: "projectsraffle"
        }
    },
    {   $unwind:"$projectsraffle" }, 
    {   
        $project:{
            _id : 1,
            ticketPrice : 1,
            totalWinners : 1,
            startedTime:1,
            avatar: "$projectsraffle.avatar",
            name : "$projectsraffle.name",
            description : "$projectsraffle.description",
            socialMedia : "$projectsraffle.socialMediaHandles",
        } 
    }

])
    return raffleProjects
}


const raffleProject =  (raffleId) => {
    const raffleProjects = Raffles.aggregate([
        {
            $match: {
              _id: ObjectId(raffleId),
            },
          },
        {   
        $lookup: {
            from: "projects", // collection name in db
            localField: "projectId", // Specifies the local documents' localField to perform an equality match with the foreign documents' foreignField.
            foreignField: "_id", // Specifies the foreign documents' foreignField to perform an equality match with the local documents' localField.
            as: "projectsraffle"
        }
    },
    {   $unwind:"$projectsraffle" }, 
    {   
        $project:{
            _id : 1,
            ticketPrice : 1,
            totalWinners : 1,
            startedTime:1,
            avatar: "$projectsraffle.avatar",
            name : "$projectsraffle.name",
            description : "$projectsraffle.description",
            socialMedia : "$projectsraffle.socialMediaHandles",
            
            
        } 
    }
    ])
  
    return raffleProjects
}

const getRaffleProject = async (raffleId)=>{
    const RaffleProject = await raffleProject(raffleId)
    const raffleEntries = await totalEntry(raffleId)
    return {"raffleProject": RaffleProject, "totalEntry":raffleEntries}
}
const totalEntry = async (raffleId) => {
    var entryCount = await getEntries(raffleId)
    var Totalentry = entryCount.reduce((accum,item) => accum + item.entryCount, 0)
    return Totalentry
}

module.exports = { addRaffle,getRaffleAllProjects,getRaffleProject,totalEntry}