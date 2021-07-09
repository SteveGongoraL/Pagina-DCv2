/*  Obtener La Hora */
let fechaActual = new Date();
let hora = fechaActual.getHours();


/* Poner Modo Oscuro Manual */
const btnSwitch =document.querySelector('#switch');
btnSwitch.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});


/* Poner Modo Oscuro Automatico */
if(hora<=6 || hora>=20){
    document.body.classList.toggle('dark')
}
else{
    document.body.classList.toggle('.')
}


/*  Saludar en Pagina Contatco */
let palabras=document.getElementsByClassName('saludo');
if (hora>=6 && hora<12){
    palabras[0].textContent="BUENOS DIAS"
}
else if (hora<20){
    palabras[0].textContent="BUENAS TARDES"
}
else{
    palabras[0].textContent="BUENAS NOCHES"
}
