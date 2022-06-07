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
    const GetEntries = userEntry.find({raffleId: raffleId})
    return GetEntries
}


module.exports = {
    addTestEntry,
    getTestEntries
}