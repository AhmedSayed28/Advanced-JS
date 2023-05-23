// currying

function sum (x , y , z) {
    return x + y + z
}
console.log(sum(1 , 2 , 3))

function currying(fn){    // function take a function as a parameter
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}

const result = currying(sum)
console.log(result(1)(2)(3))