const menuButton = document.querySelector("#menu")
const navBar = document.querySelector("#menu1");
menuButton.addEventListener("click",()=>{
    navBar.classList.toggle("moveRight")
    const icon  = document.querySelector("#menu i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")
})

//log in  
const login = document.querySelector("#login");
login.addEventListener("click",()=>{
    window.open("./Front-end/logins/login.html", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
})


//explore

const explore = document.querySelector("#explore")

explore.addEventListener("click",()=>{
    window.location.href = "./Front-end/main/index.html";
})


//buyshit

const buyshit = document.querySelector("#buyshit")
buyshit.addEventListener("click",()=>{
    window.location.href = "./Front-end/main/index.html";
})
const sellShit = document.querySelector("#sellShit")
sellShit.addEventListener("click",()=>{
    window.location.href = "./Front-end/farmersChoice/index.html";
//this requires new mode to change it
Window. Reload() 
})

