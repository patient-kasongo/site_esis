//mode sombre
let mode=document.querySelector(".mode");
let body=document.querySelector("body");
mode.addEventListener("click",function()
{
    body.classList.toggle('dark');
})