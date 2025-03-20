const color = ["#b78fcb","#cb99c7","#efbbcd","#ffcbd8","#c3adc3","#bd959f","#eeb5b5"]

let buttonclick = document.querySelector(".button")
let bgcolour = document.querySelector("body")
let colourtext = document.querySelector(".colortext")


function getRandomNumber(){
    return Math.floor(Math.random()*color.length)
}

buttonclick.addEventListener("click",function(){

    const randomNo = getRandomNumber()
    bgcolour.style.backgroundColor=color[randomNo]
    colourtext.textContent=color[randomNo]

})

