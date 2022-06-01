import { buyTicket } from '../artifacts/buyTicket'
import { getUserEntry } from '../controller/userEntry'
import { getRaffleProject } from '../controller/raffle'
import { unixToDate } from './unixTo'
import React from 'react';

var userEntryCount = 0

export async function getUserEntryInfo(id) {
     //   "0x4d9c845c2eeb40e38d97b50241f6e2b540d958bec41f178ccda95603c389eda"
    // "0x4d9c845c2eeb40e38d97b50241f6e2b540d958bec41f178ccda95603c389edb"
    let walletAddress = "0x4d9c845c2eeb40e38d97b50241f6e2b540d958bec41f178ccda95603c389edc"

    const BuyTicket = () => {
        userEntryCount = buyTicket(userEntryCount, id, walletAddress)
    }
    // raffle project info
    var result = await getRaffleProject(id)
    result = await result.text()
    result = JSON.parse(result)
    const raffleProject = result.raffleProject[0]
    const totalEntry = result.totalEntry
    const userEntryData = {
        "raffleId": raffleProject._id,
        "user": walletAddress
    }

    // raffle started time
    const raffleStartTime = raffleProject.startedTime

    let countDown = unixToDate(raffleStartTime)
    try {
        setInterval(function () { document.getElementById("bilal").innerHTML = "Ends in " + unixToDate(raffleStartTime) }, 1000);
    } catch (error) {
        console.log("error")
    }

    // user entry info
    var userEntry = await getUserEntry(userEntryData)
    userEntry = await userEntry.text()
    userEntry = JSON.parse(userEntry)
    if (userEntry.length > 0) {
        userEntry = userEntry[0]
        userEntryCount = userEntry.entryCount
    } else {
        userEntryCount = 0
    }

    return (
        <>
            <image src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image" />

            <div className="grid-container">

                <div className="grid-child-posts" id="ticketCount">
                    <p id="bilal">Ends in {countDown} </p>
                    <p>Ticket Price: {raffleProject.ticketPrice}</p>
                    <p>Ticket Sold :{totalEntry}</p>
                    <p>Your ticket: {userEntry.entryCount} </p>
                </div>

                <div className="grid-child-followers">

                </div>

            </div>

            <button onClick={BuyTicket} className="btn draw-border">Buy Ticket</button>

        </>
    )
}