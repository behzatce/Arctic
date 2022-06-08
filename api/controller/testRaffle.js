const testRaffle = require('../models/testRaffle')

const getTestRaffle =  (date) => {

    const GetTestRaffle = testRaffle.aggregate([
        {
            $match: {
                startedTime:date,
            },
          },
        {
        $lookup: {
            from: "testraffleentries", // collection name in db
            localField: "raffleNumber",
            foreignField: "raffleId",
            as: "raffleEntries"
        }
    },
    {   
        $project:{
            _id : 1,
            raffleNumber : 1,
            totalWinners : 1,
            startedTime: 1,
            entryCount: { $size: "$raffleEntries" }
        } 
    }

])
    return GetTestRaffle
}

const addTestRaffle = (rafflesData) => {
    const raffles = new testRaffle({
        raffleNumber : rafflesData.raffleNumber,
        totalWinners : rafflesData.totalWinners,
        startedTime : rafflesData.startedTime
    })
    return raffles
}

const updateTestRaffle = (raffleId) => {
    const UpdateTestRaffle = testRaffle.findOneAndUpdate({raffleNumber:raffleId }, { "isPast": true })
    return UpdateTestRaffle
}
const getPastTestRaffle = () => {
    const GetPastTestRaffle = testRaffle.find({isPast: true}).select('raffleNumber').select('startedTime');
    return GetPastTestRaffle
}
module.exports = { getTestRaffle,addTestRaffle,updateTestRaffle,getPastTestRaffle}