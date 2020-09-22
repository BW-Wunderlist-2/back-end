const router = require("express").Router();
const dataBase = require("../../data/db-model");
const protect = require("../authorization/restrict");

// get all the users
router.get("/allusers",  async (req,res)=>{
    try {
        const users = await dataBase.getAllUsers();
        res.status(200).json({data: users})
    } 
    catch (err){
        res.status(500).json({message: "there was a internal server problem"})
    }
})

// get user's tasks // requires token 
router.get("/user/tasks/:id", protect, async (req,res)=>{
    const {id} = req.params;
    
    try {

        const data = await dataBase.findUserTasks(id)
            res.status(200).json({data})
        
    }
     catch (err){
        throw err;
    }

})

// get a single task // requires token and task id 
router.get("/single-task/:id", protect, async (req,res)=>{
    const {id} = req.params;
    try {
        const data = await dataBase.findTask(id);
        res.status(200).json({data})
    } catch (Err){
        throw Err;
    }
});

// create a new task //  requires token and user_id 
router.post("/user/tasks/:id", (req,res)=>{
    const {id} = req.params;   
    const content = req.body;
    dataBase.addUserTask({...content, user_id: id})
    .then(data => {
        res.status(201).json({data})
    }) 
    .catch(err=> res.status(404).json({message: err.message}))
});

// updates a task // requires task id and token
router.put("/single-task/:id", (req,res)=>{
    // !!!! THIS WILL REFER TO THE TASK'S ID NOT THE "user_id"!!!!
    const {id} = req.params;
    const content = req.body; 

    dataBase.updateUserTask(id, content)
    .then(data => res.status(200).json({data}))
    .catch(err=> res.status(404).json({message: err.message}))

});


// deletes a task requires token and task id 
router.delete("/single-task/:id", (req,res)=>{
    const {id} = req.params;

    dataBase.remove(id)
    .then(()=>{
        res.status(200).json({data: "task removed"})
    })
    .catch(err=> res.status(404).json({message: err.message}))
})



module.exports = router;