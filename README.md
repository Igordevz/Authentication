# Authentication 🚀

// Server

  Express
  
//SingIN
      router.post("/create_user", CreateUser);
      router create_user, with the following parameters: --> name email password
//login
  router.post('/login_user', LoginUser)
  router login, with the following parameters: --> name email password

// conection 

MongoDB 

// User 

router.post('/user', GetUser )
Data User 



Model simple Authentication🚀


# How to use

// Create_user
   
   ![image](https://user-images.githubusercontent.com/111516927/223863210-5c07f626-474d-4841-bc32-e89b396527d7.png)

async function (){

await axios.post(url, {
  email: (send email input),
  password: (send password input),
  name: (send name input)
})

}

// Login User 
async function (){

await axios.post(url, {
  email: (send email input),
  password: (send password input),
})

}
