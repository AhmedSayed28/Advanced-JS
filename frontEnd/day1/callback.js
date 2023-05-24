function greeting(name){
    console.log(`Hello ${name}`)
}
//greetAhmed => higher order function
//fn         => callback function
function greetAhmed(fn){   
    const name = "Ahmed"  
    fn(name)
}

greetAhmed(greeting)