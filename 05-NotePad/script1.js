var screenoverlay = document.querySelector(".screenoverlay")
var popbox = document.querySelector(".popupbox")

function clicking()
{
    screenoverlay.style.display= "block"
    popbox.style.display = "block"
}

var cancelbook = document.getElementById("cancel-book")

cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    screenoverlay.style.display= "none"
    popbox.style.display = "none"

})


var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var author = document.getElementById("book-auth")
var booktitle = document.getElementById("book-title")
var bookdes = document.getElementById("book-discription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","insidecontainer")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h3>${author.value}</h3>
    <p>${bookdes.value}</p>
    <button onclick='deleting(event)'>Delete</button>`;
    container.append(div)
    screenoverlay.style.display= "none"
    popbox.style.display = "none"

})

function deleting(event) {
    
    event.target.parentElement.remove();
}
