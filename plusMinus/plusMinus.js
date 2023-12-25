let numberjs = document.querySelector("#number")
let plus = document.querySelector("#addition")
let minus = document.querySelector("#decrease")
let firstNum = parseInt(numberjs.innerHTML)

plus.addEventListener("click",function(){
    firstNum++
    updateNum()
})

minus.addEventListener("click",function(){
    firstNum--
    updateNum()
})

function updateNum(){
    numberjs.innerHTML = firstNum
}