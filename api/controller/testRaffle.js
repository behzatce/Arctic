const testRaffle = require('../models/testRaffle')

const getTestRaffle = (date) => {

    const GetTestRaffle = testRaffle.find({startedTime:date })
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