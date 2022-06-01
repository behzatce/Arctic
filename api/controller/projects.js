const Projects = require('../models/projects')

 const addProjects = (projectsData) => {
    const blog = new Projects({
        avatar : projectsData.avatar,
        name : projectsData.name,
        description : projectsData.description,
        socialMediaHandles :  {
            discord :projectsData.discordUrl,
            twitter : projectsData.twitterUrl
        },
        mintDate : projectsData.mintDate,
        mintPrice : projectsData.mintPrice,
        supply : projectsData.supply,
        isWlActive : projectsData.isWlActive
    })
    return blog
}


const getProjects = () =>{
    const projects = Projects.find()
    return projects
}

module.exports = { addProjects, getProjects }