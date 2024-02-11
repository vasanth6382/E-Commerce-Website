var sidenav = document.querySelector(".side-navbar")

function showNavbar(){
sidenav.style.left="0"
}

function closeNavbar(){
sidenav.style.left="-60%"

}
var enteredText =""
var container= document.querySelector('div')
var elements = container.querySelectorAll('h1')

function check(event){
    enteredText = event.target.value.toUpperCase()
    for(var i=0;i<elements.length;i++){
        if(elements[i].textContent.toUpperCase().indexOf(enteredText) < 0){
        elements[i].style.display ="none"
    }
    else{
        elements[i].style.display = "block"
    }
    }
  
}

function subscribe(){
    alert("Subscribed")
}
