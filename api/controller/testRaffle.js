const testRaffle = require('../models/testRaffle')

const getTestRaffle = () => {
    const GetTestRaffle = testRaffle.find()
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

module.exports = { getTestRaffle,addTestRaffle}