


//MOde sombre 
let sombre = document.querySelector("#sbr")
let fond = document.querySelector("body")
let border = document.querySelectorAll('.bb')
sombre.addEventListener("click",function(){
    fond.classList.toggle('black')
    fond.classList.toggle('white')
    border.forEach(border => {
        border.classList.toggle('borderwhite'); 
});
})



