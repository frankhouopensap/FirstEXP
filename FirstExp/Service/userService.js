const userDAO = require('../DAO/userDao');

const getUserByIdServ = async (request, response) => {
    const userId = request.params.id
    const userData = await userDAO.getUserByIdDAO(userId)
    console.log(`Start querying with userId:${userId}`);
    console.log(userData.rows)
    response.status(200).json(userData.rows);
}

const addUserServ = async (request, response) => {
    console.log('Start creating')
    const userInfo = request.body
    const userData = await userDAO.addUserDAO(userInfo)
    console.log(userData)
    response.status(201).json(userData.rowsCount);
}

const delUserByNameServ = (request, response) => {
    const username = request.params.name
    console.log(`Start deleting:${username}`)
    userDAO.delUserByNameDAO(username)
    response.status(200).send(`User:${username} is deleted`)
}

const uptUserByNameServ = async (request,response) =>{
    const username = request.params.name
    console.log(`Start updating user:${username}`);
    const userInfo = request.body
    const userData = await userDAO.uptUserByNameDAO(username,userInfo)
    response.status(200).send(`User modified with name:${username}`);
}

module.exports = {
    getUserByIdServ,
    addUserServ,
    delUserByNameServ,
    uptUserByNameServ
}
