const userDAO = require('../DAO/userDao');

const getUserByIdServ = async(request,response) => {
    const userId = request.params.id
    const userData = await userDAO.getUserByIdDAO( userId )
    console.log(userData.rows)
    response.status(200).json(userData.rows);
} 

const addUserServ = async(request,response) => {
    console.log('Start creating');
    const userInfo = request.body;
    const userData = await userDAO.addUserDAO(  )
    console.log(userData.rows)
    response.status(200).json(userData.rows);
} 

module.exports = {
    getUserByIdServ,
    addUserServ
    // addUserDAO,
    // delUserByNameDAO,
    // uptUserByNameDAO
}

// const addUserServ = async(request,response) => {
//     const userId = request.params.id;
//     await userDAO.getUserById( id );
// } 

// router.get('/:id', userDAO.getUserById);
// router.post('/', userDAO.addUser);
// router.delete('/:name', userDAO.delUser) ;
// router.put('/:name', userDAO.updateUserByName) ;
// module.exports = router;
