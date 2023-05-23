function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
     inner()
}
outer() // 1
outer() // 1
outer() // 1
outer() // 1

// this is js closure

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner
}
const count = outer()
count() // 1
count() // 2
count() // 3
count() // 4