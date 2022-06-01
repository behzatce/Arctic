
import { addEntry, updateEntry } from '../controller/userEntry'

export const buyTicket = (userEntryCount, id, walletAddress) => {
    var _userEntryCount= 0
    if (userEntryCount > 0) {
        const entryData = {
            "raffleId": id,
            "user": walletAddress,
            "entryCount": userEntryCount + 1
        }
        updateEntry(entryData)
        _userEntryCount = userEntryCount+1
    } else {
        const entryData = {
            "raffleId": id,
            "user": walletAddress,
            "entryCount": 1
        }
        addEntry(entryData)

    }
    return _userEntryCount
}