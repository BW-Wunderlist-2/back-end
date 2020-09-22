# back-end


<h2>Registeration/Login End points</h2>

description: these two endpoints will allow the client to register/login a user acount, they are both POST requests. 

👉 POST api/admission/register 

provide username and password both required and username must be unique
 <img src="https://i.ibb.co/10v3zmz/register-Post-Request.png"/>

 This will return the following object 

  <img src="https://i.ibb.co/WHQT1w6/register-Post-Response.png">

!!!! please save the token to local storage and also you will need to save the user's Id either in local storage or in your state you will need the ID to access the user's tasks so SAVE IT !!!!

👉 POST api/admission/login
 YOU provide username and password
<img src="https://i.ibb.co/MgLjy2k/Login-Post-request.png">


!!!!! You will need to save the token and id which will be used to access the other endpoints!!!

the request will return the following :
<img src="https://i.ibb.co/mbjvhCF/login-post-response.png">


<h2>Task Routes</h2>



👉GET api/user/tasks/:id : YOU provide the logged in user's Id in the get request: It returns all the tasks for the specified user (it should return  data: [] , in the beginning as there are no tasks)
<img src="https://i.ibb.co/s1h2F1z/Get-Tasks-Request.png">

the response will look something like this: 
<img src="https://i.ibb.co/tLgtQND/get-tasks-response.png" />


👉POST api/user/tasks/:id : YOU provide the user's id to post the task to, it will return the list of all the tasks !!!! please look at this example 


{

    
 axios.post("/api/user/tasks/1", {


    "task": "example",
    "description": "hello world",
    "complete" : false,
    "dueDate": "9/25/2020"

    
})

}
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