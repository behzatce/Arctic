const PreProject = require('../models/apply')

 const preProject = (preProjectData) => {
    const preProject = new PreProject({
        name : preProjectData.name,
        supply: preProjectData.supply,
        socialMediaHandles :  {
            discord :preProjectData.discordUrl,
            twitter : preProjectData.twitterUrl
        },
        contact : preProjectData.contact,
        wlSupplyCap : preProjectData.wlSupplyCap,
        arcticWlAlloc : preProjectData.arcticWlAlloc
    })
    return preProject
}



const getPreProjects = () =>{
    const preProjects = PreProject.find()
    return preProjects
}

module.exports = { preProject,getPreProjects}