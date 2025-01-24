let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingeffect = new Typed("#text",{
    strings:["Kanishk Upadhyay","UI/UX Designer","Frontend Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})