let botonHamburger = document.getElementById("boton-nav");
let contenedorEnlaces = document.getElementById("enlaces");


botonHamburger.addEventListener("click", () => {
    
    contenedorEnlaces.classList.forEach(clase => {
        if(clase == "hidden"){
            contenedorEnlaces.classList.replace("hidden", "flex");
            contenedorEnlaces.classList.add("bg-White")
        }else if(clase == "flex"){
            contenedorEnlaces.classList.replace("flex", "hidden")
            contenedorEnlaces.classList.remove("bg-White")
        }
    })
})