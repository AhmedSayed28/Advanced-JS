// let number = document.querySelector(".number");
// let inc = document.querySelector(".inc");
// let dec = document.querySelector(".dec");
// let reset = document.querySelector(".reset");

//     inc.onclick =  ()=>{
//         number.textContent = parseInt(number.textContent)+1
//     }
//     dec.onclick =  ()=>{
//         if (number.textContent<1){
//             return
//         }else{
//             number.textContent = parseInt(number.textContent)-1
//         }
//     }
//     reset.onclick =  ()=>{
//         number.textContent = 0
//     }


// let name = document.querySelector(".name");
// let email = document.querySelector(".email");
// let password = document.querySelector(".password");

// document.forms[0].onsubmit = function(e){
//     nameValid = false;
//     emailValid = false;
//     passwordValid = false;

//     if(password.value.length <8){
        
//     }

//     if(nameValid === false || emailValid === false || passwordValid === false){
//         e.preventDefault();
//     }
// }

let upBtn = document.querySelector("button");

window.onscroll = function(){
    if(scrollY >=400){
        upBtn.style.display = 'block';
    }else{
        upBtn.style.display = 'none';
    }
}

upBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
