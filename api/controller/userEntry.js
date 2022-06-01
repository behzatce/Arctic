const userEntry = require('../models/userEntry')

const addEntry = (entryData) => {
    const tickets = new userEntry({
        raffleId: entryData.raffleId,
        user: entryData.user,
        entryCount: entryData.entryCount,
        isWin: false,
    })
    return tickets
}

const getEntries = (raffleId) => {
    const GetEntries = userEntry.find({raffleId: raffleId})
    return GetEntries
}

const getUserEntries = (entryData) => {
    const GetUserEntries = userEntry.find({ raffleId: entryData.raffleId, user: entryData.user })
    return GetUserEntries
}

const updateUserEntry = (entryData) => {
    const id = entryData.raffleId

    const UpdateUserEntry = userEntry.findOneAndUpdate({ 'user': entryData.user, raffleId:id }, { "entryCount": entryData.entryCount })
    return UpdateUserEntry
}
module.exports = {
    addEntry,
    getEntries, getUserEntries, updateUserEntry
}