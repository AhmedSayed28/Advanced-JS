// AJAX
// XMLHttpRequest

let myRequest = new XMLHttpRequest();

    myRequest.open("GET","https://jsonplaceholder.typicode.com/users")
    myRequest.send();
    myRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            for (let i = 0;i<=data.length;i++) {
                let name = document.createElement("div");
                let value =document.createTextNode(data[i].name);
                name.appendChild (value);
                document.body.appendChild(name);
            }
        }
    }

console.log(myRequest)
