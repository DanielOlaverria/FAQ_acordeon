/*Buscamos y Almacenamos la clase de cada una de las respuestas en las variables descritas...*/
const respu1 =document.querySelector(".respuesta1");
const respu2 =document.querySelector(".respuesta2");
const respu3 =document.querySelector(".respuesta3");
const respu4 =document.querySelector(".respuesta4");

/*Creamos una variable y le asignamos el elemento h3 para eliminar el margen y así la respuesta se vea tan separado de la pregunta.*/
const respuestas = document.querySelector("h3");
respuestas.style.margin="0px";

/*Buscamos y Almacenamos la clase de cada una de las imagenes del signo "mas" en las variables descritas...*/
const res1 = document.querySelector(".mas1");
const res2 = document.querySelector(".mas2");
const res3 = document.querySelector(".mas3");
const res4 = document.querySelector(".mas4");

/*Buscamos y Almacenamos el "id" de cada una de las imagenes del signo "menos" en las variables descritas...*/
let menor1 = document.getElementById("menos");
let menor2 = document.getElementById("menos2");
let menor3 = document.getElementById("menos3");
let menor4 = document.getElementById("menos4");


/*Asignamos un evento y una función flecha a cada una de las variables que mostrarán las respuestas al hacer click en el signo "mas", ocultando este luego del clic y mostrando el signo "menor"...*/
res1.addEventListener("click", () =>{
    respu1.style.display="inline-block";
    res1.style.display="none";
    menor1.style.display="inline-block";
});

res2.addEventListener("click", () =>{
    respu2.style.display="inline-block";
    res2.style.display="none";
    menor2.style.display="inline-block";
});

res3.addEventListener("click", () =>{
    respu3.style.display="inline-block";
    res3.style.display="none";
    menor3.style.display="inline-block";
});

res4.addEventListener("click", () =>{
    respu4.style.display="inline-block";
    res4.style.display="none";
    menor4.style.display="inline-block";
});

/*Le asignamos un evento "click" y una función flecha a cada variable que representa el signo "menos", al hacer click en este, se ocultará dicho signo menos y la respuesta o texto de  la respuesta y mostrará el signo más...*/
menor1.addEventListener("click", () => {
    menor1.style.display = "none";
    res1.style.display = "inline-block";
    respu1.style.display = "none";
});
menor2.addEventListener("click", () => {
    menor2.style.display = "none";
    res2.style.display = "inline-block";
    respu2.style.display = "none";
});
menor3.addEventListener("click", () => {
    menor3.style.display = "none";
    res3.style.display = "inline-block";
    respu3.style.display = "none";
});
menor4.addEventListener("click", () => {
    menor4.style.display = "none";
    res4.style.display = "inline-block";
    respu4.style.display = "none";
});