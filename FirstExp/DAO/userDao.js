const dbConn = require('../DB/dbConn');
const getUserByIdDAO = async ( userId ) => {
    console.log(`Start querying with userId:${userId}`);
    return dbConn.dbPool.query('select * from userinfo where id = $1', [userId] );
}
//Create a new user
const addUserDAO = (userInfo) => {

    dbConn.dbPool.query('insert into userinfo (name,age,password) values (userInfo.name,userInfo.age,userInfo.password)',
                         [name, age, password], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(201).send('User'+ result.insertId + ' is created successfully');
    })
}    
// Delete a user
const delUserByNameDAO = (request,response) =>{
    const name = request.params.name;
    console.log('Deleting user:'+ name);
    dbConn.dbPool.query('delete from userinfo where name = $1', [name], (error, result) => {
        if(error){
            throw error;
        }
        response.status(200).send('User:'+ name +' is deleted');
    })
}

//Update a users
const uptUserByNameDAO = (request,response) => {
    const name = request.params.name;
    console.log(name);
    const { age, password } = request.body;
    console.log(age);
    console.log(password);
    console.log('Start updating user:'+name);
    dbConn.dbPool.query('update userinfo set age = $1, password = $2 where name = $3', [age,password,name], (error,result) => {
        if (error) {
            throw error;
        }
        response.status(200).send('User modified with name:' + name);
    })
}

module.exports = {
    getUserByIdDAO,
    addUserDAO,
    delUserByNameDAO,
    uptUserByNameDAO
}
// module.exports = function(app){
// //Get a user by userId
//     app.get('/userInfo/', function(req,res,next)
//     {
//         console.dir(req.query.username);
//         dbConn.dbPool.query('select * from userinfo where  name= $1', [req.query.username],  (error,result) => {
//             if (error){
//                 throw error;
//             }
//         res.status(200).json(result.rows);
//         } )

//     });
// //Create a new user
//     app.post('/userHandle', function(req,res){

//     });

// //     app.delete('/userHandle', function(req,res){

// //     });
// }