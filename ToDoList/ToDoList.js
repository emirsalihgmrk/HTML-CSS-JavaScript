let userList = document.querySelector("#userList")
let input = document.querySelector("#input")
let button = document.querySelector("#button")
button.addEventListener("click",formHandler)

function formHandler(e){
    e.preventDefault()
    addList()
}


function addList(){
    let inpValue = input.value
    

    let buttonX = document.createElement("button")
    buttonX.textContent = "X";
    buttonX.style.backgroundColor = "rgb(161, 155, 155)";
    
    

    let liDOM = document.createElement("form")
    liDOM.textContent = inpValue
    liDOM.appendChild(buttonX)
    liDOM.classList.add("form-control")
    buttonX.style.float = "right";
    
    
    

    



    content.appendChild(liDOM)
    buttonX.addEventListener("click",function(){
        content.removeChild(liDOM)
    })
    input.value = "";
}

