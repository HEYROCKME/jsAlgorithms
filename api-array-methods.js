const getUser = async () => {
    const api = 'http://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const data = await response.json()

    output = data
    .filter( (user) => user.name
    .toLowerCase()
    .includes("k"))
    .map(({name, email}) => ({name, email})) //map and destructuring objects! Nice!

    return output      
}


(async function () {

    try{
        console.log( await getUser())
    }catch(err){
        console.log(err)
    }

})()

