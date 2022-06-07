const testRaffleEntry = require('../models/testRaffleEntry')

const addTestEntry = (entryData) => {
    const tickets = new testRaffleEntry({
        raffleId: entryData.raffleId,
        walletAddress: entryData.walletAddress,
        raffleStartTime: entryData.raffleStartTime,
    })
    return tickets
}

const getTestEntries = (raffleId) => {
    const GetEntries = testRaffleEntry.find({raffleId: raffleId})
    return GetEntries
}

const getUserTestEntry = (walletAddress,raffleId) => {
    const GetUserEntry = testRaffleEntry.find({walletAddress: walletAddress, raffleId:raffleId})
    return GetUserEntry
}


module.exports = {
    addTestEntry,
    getTestEntries,
    getUserTestEntry
}