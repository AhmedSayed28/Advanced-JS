let lis = document.querySelectorAll("ul li");
let screener = document.querySelector(".screen");

// window.localStorage.clear();

if(window.localStorage.getItem("color")){
    screener.style.backgroundColor = window.localStorage.getItem("color")
     // remove active class from all 
     lis.forEach((li)=> {
     li.classList.remove("active");

     document.querySelector(`[data-color="${ window.localStorage.getItem("color")}"]`).classList.add("active");
     })
}else{
    console.log("noooooooooooooooooo")
}


lis.forEach((li)=> {
    li.addEventListener("click",(event)=> {
        // console.log(event.currentTarget.dataset.color)
        lis.forEach((li)=>{

            // remove active class from all 
            li.classList.remove("active"); 

            // add active class to  the target
            event.currentTarget.classList.add("active");
            
            // add desire color to Local Storage
            window.localStorage.setItem("color",screener.style.backgroundColor = event.currentTarget.dataset.color);
        })
    })
});