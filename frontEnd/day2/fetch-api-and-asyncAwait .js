fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    console.log(result)
    let users = result.json()
    console.log(users)
    return users // to use it in next iteration
}).then((users)=>{
    let name =users[0].name
    document.querySelector('.name').innerHTML =name
})

async function fetching(){
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let user = await data.json();
        let name = user[0].name;
        console.log(name)
    }catch(error){
        console.log(`Reason : ${error}`)
    }finally{
        console.log("i have done fetching")
    }
}
fetching()