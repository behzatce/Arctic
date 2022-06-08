const express = require('express')
const mongoose = require('mongoose')

const { addProjects, getProjects } = require('./controller/projects')
const { preProject, getPreProjects } = require('./controller/apply')
const { addRaffle, getRaffleAllProjects, getRaffleProject } = require('./controller/raffles')
const { addEntry, getEntries, getUserEntries, updateUserEntry } = require('./controller/userEntry')
const { getTestRaffle, addTestRaffle ,updateTestRaffle,getPastTestRaffle} = require('./controller/testRaffle')
const { addTestEntry, getUserTestEntry, getTestEntries } = require('./controller/testRaffleEntry')
const { addWinners, getAllWinners, getwinners } = require('./controller/winners')
const crypto = require('crypto');

const app = express();

const dbURL = 'mongodb://localhost:27017/arcticium'
mongoose.connect(dbURL)
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err))


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/addProjects', (req, res) => {
    const postData = req.body

    const projectsData = {
        avatar: postData.avatar,
        name: postData.name,
        description: postData.description,
        discordUrl: postData.discord,
        twitterUrl: postData.twitter,
        mintPrice: postData.mintPrice,
        mintDate: postData.mintDate,
        supply: postData.upply,
        isWlActive: false,
        isPastProject: false
    }
    addProjects(projectsData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


app.get('/getAllProjects', (req, res) => {

    getProjects()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


app.post('/apply', (req, res) => {
    const postData = req.body
    const preProjectsData = {
        name: postData.name,
        supply: postData.supply,
        discordUrl: postData.discord,
        twitterUrl: postData.twitter,
        contact: postData.contact,
        wlSupplyCap: postData.wlSupplyCap,
        arcticWlAlloc: postData.arcticWlAlloc,
    }
    preProject(preProjectsData).save()
        .then((resq) => res.send("ok"))
        .catch((err) => res.send(err))
})


app.get('/getPreProjects', (req, res) => {

    getPreProjects()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/addRaffles', (req, res) => {
    const postData = req.body

    const raffleData = {
        projectId: postData.projectId,
        ticketPrice: postData.ticketPrice,
        totalWinners: postData.totalWinners
    }

    addRaffle(raffleData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.get('/getRaffleAllProjects', (req, res) => {
    getRaffleAllProjects()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/getRaffleProject', (req, res) => {
    const postData = req.body
    getRaffleProject(postData.raffleId)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/addEntry', (req, res) => {
    const postData = req.body

    const entryData = {
        raffleId: postData.raffleId,
        user: postData.user,
        entryCount: postData.entryCount
    }
    addEntry(entryData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.get('/getEntries', (req, res) => {
    getEntries()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})



app.post('/getUserEntry', (req, res) => {
    const postData = req.body
    const userData = {
        raffleId: postData.raffleId,
        user: postData.user,
    }
    getUserEntries(userData)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/updateEntry', (req, res) => {
    // const secret = 'abcdef3wwsg';

    // const hash = crypto.createHmac('sha256', secret)
    //     .update('I love cupcakes')
    //     .digest('hex');
    // console.log(hash);

    const postData = req.body
    const userData = {
        raffleId: postData.raffleId,
        user: postData.user,
        entryCount: postData.entryCount
    }
    console.log("userData", userData)
    updateUserEntry(userData)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


// TEST start //

app.post('/testRaffle', (req, res) => {
    const postData = req.body
    getTestRaffle(postData.date)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/addTestRaffle', (req, res) => {
    const postData = req.body
    const raffleData = {
        raffleNumber: postData.raffleNumber,
        totalWinners: postData.totalWinners,
        startedTime: postData.startedTime
    }
    addTestRaffle(raffleData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/joinTestRaffle', (req, res) => {
    const postData = req.body
    const raffleData = {
        raffleId: postData.raffleId,
        walletAddress: postData.walletAddress,
        raffleStartTime: postData.raffleStartTime
    }
    addTestEntry(raffleData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


app.post('/getUserTestEntry', (req, res) => {
    const postData = req.body

    getUserTestEntry(postData.walletAddress, postData.raffleId)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


app.post('/getAllEntry', (req, res) => {
    const postData = req.body

    getTestEntries(postData.raffleId)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.get('/getPastTestRaffle', (req, res) => {

    getPastTestRaffle()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


app.post('/updateTestRaffle', (req, res) => {
    const postData = req.body

    updateTestRaffle(postData.raffleId)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


// TEST end //

app.post('/addWinners', (req, res) => {
    const postData = req.body
    const winnerData = {
        raffleId: postData.raffleId,
        userWallet: postData.walletAddress,
        entryCount: 1
    }
    console.log(winnerData)
    addWinners(winnerData).save()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.post('/getWinners', (req, res) => {
    const postData = req.body
    getwinners( postData.raffleId)
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})

app.get('/getAllWinners', (req, res) => {
    getAllWinners()
        .then((resq) => res.send(resq))
        .catch((err) => res.send(err))
})


