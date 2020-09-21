# back-end


Registeration/Login End points

description: these two endpoints will allow the client to register/login a user acount, they are both POST requests. 

👉 POST api/admission/register : YOU provide username and password : IT returns  {


    data: {
        id: Number,
        username: String, 
        password: String
    },
    token: String


}

!!!! please save the token to local storage and also you will need to save the user's Id either in local storage or in your state you will need the ID to access the user's tasks so SAVE IT !!!!

POST api/admission/login : YOU provide username and password: IT returns {


    token: String,
    id: Number


}
!!!!! You will need to save the token and id which will be used to access the other endpoints!!!


PROTECTED ROUTES/ !!! CAN ONLY BE ACCESSED WITH TOKEN !!!!

after you log in provide the following for ALL of your get requests please provide this object after specifing the get url headers: {


    Authorization: /// here you will need to provide the token you got from registering/signing in /// 


}

example 

axios.get("api/user/tasks/3",

{
    
    headers: {


    Authorization: localStorage.getItem("token")  //


    }})

GET api/user/tasks/:id : YOU provide the logged in user's Id in the get request: It returns all the tasks for the specified user (it should return  data: [] , in the beginning as there are no tasks)

POST api/user/tasks/:id : YOU provide the user's id to post the task to, it will return the list of all the tasks !!!! please look at this example 

axios.post("/api/user/tasks/1", {


    "task": "example",
    "description": "hello world",
    "complete" : false,
    "dueDate": "9/25/2020"

    
})

this request will return data : [
    {/////},
    {
    "task": "example",
    "description": "hello world",
    "complete" : false,
    "dueDate": "9/25/2020",
    "id": 1 !!!! this will refer to the tasks id 
    "user_id": "this will refer to the user who added the task
}
]