const dbConn = require('../DB/dbConn');

const getUserByIdDAO = async (userId) => {
    return dbConn.dbPool.query('select * from userinfo where id = $1', [userId]);
}
//Create a new user
const addUserDAO = async (userInfo) => {
    return dbConn.dbPool.query('insert into userinfo (name,age,password) values ($1,$2,$3)',
        [userInfo.name, userInfo.age, userInfo.password])
}
// Delete a user
const delUserByNameDAO = (username) => {
    dbConn.dbPool.query('delete from userinfo where name = $1', [username], (error, result) => {
        if (error) {
            throw error
        }
    })
}

//Update a users
const uptUserByNameDAO = async (username,userinfo) => {
    return dbConn.dbPool.query('update userinfo set age = $1, password = $2 where name = $3', [userinfo.age, userinfo.password, username])
}

module.exports = {
    getUserByIdDAO,
    addUserDAO,
    delUserByNameDAO,
    uptUserByNameDAO
}