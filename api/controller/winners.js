const winners = require('../models/winners')

const addWinners = (winnerData) => {
    const Winners = new winners({
        raffleId: winnerData.raffleId,
        userWallet: winnerData.userWallet,
        entryCount: winnerData.entryCount
    })
    return Winners
}

const getwinners = (raffleId) => {
    const getWinners = winners.find({raffleId: raffleId})
    return getWinners
}

const getAllWinners = () => {
    const GetAllWinners = winners.find()
    return GetAllWinners
}

module.exports = {
    addWinners,
    getwinners,getAllWinners}