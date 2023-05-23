const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{

        let delivery = true;
        if(delivery){
            resolve ('Food is already delivered')
        }else{
            reject(Error("Food hasn't delivered yet"));
        }
        console.log(myPromise);
    }, 2000)

})

const fulfillment =(result) =>{console.log(result)}
const rejected =(Error) =>{console.log(Error)}

myPromise.then(fulfillment, rejected)