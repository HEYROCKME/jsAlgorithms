let userArray = []

function getUser() {  
    userArray.map((user) => {

        if (user.name.toLowerCase().includes("k")) {
            console.log(user.name + ": " + user.email)
        }       
        
    })
}


fetch("http://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    
   userArray = data.splice(0,10)
  getUser()
 
    
})



