const db = require("./connection");

module.exports = {
    addUser,
    findUser,
    findUserTasks,
    addUserTask, 
    remove,
    findTask,
    updateUserTask,
    getAllUsers,
    findUser
};

async function addUser(user){
    try {
        const [id] = await db("user").insert(user, "id");
        username = user.username

        return db("user").where("username", username)
    }
     catch(err){
        throw err;
    }
};

function findUser(username){
    return db("user").where("username", username).first();
};



function findUserTasks(id){
    return db("tasks").where("user_id", id);
};

function addUserTask(content){
    const {user_id} = content
    return db("tasks").insert(content)
    .then(()=>{
        return db("tasks").where("user_id", user_id)
    })
    .catch(err=> console.log(err))

};

function findTask(id){
    return db("tasks").where("id", id)
}

function updateUserTask(id, changes){
    return findTask(id).update(changes).then(()=> findTask(id)).catch(err=> console.log(err))
};

function remove(id){
    return findTask(id).del();
};

function getAllUsers(){
    return db("user");
}
