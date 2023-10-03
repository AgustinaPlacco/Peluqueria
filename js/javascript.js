const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')
const linkInicio = document.getElementById('link-inicio')
const linkNosotros = document.getElementById('link-nosotros')
const linkServicios = document.getElementById('link-servicios')
const linkStaff = document.getElementById('link-staff')
const linkGaleria = document.getElementById('link-galeria')
const linkContacto = document.getElementById('link-contacto')

toggleButton.addEventListener('click', () =>{
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
})

linkInicio.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

linkNosotros.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

linkServicios.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

linkStaff.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

linkGaleria.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

linkContacto.addEventListener('click', () =>{
    navWrapper.classList.toggle('show')
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    duration:500,
    indicators:true,

  });
});

//para que me quede seleccionado la seccion del menu
let enlances = document.querySelectorAll(".main-nav .nav-links a")

 enlances.forEach((element) =>{ //cramos un bucle para recorrerlos 
    element.addEventListener('click',(event)=> { //en cada enlaces aplicamos un listener que va hacer click
       // console.log(event.target)

       //eliminamos la clase activo
       enlances.forEach((link)=>{
        link.classList.remove('activo');

       })

       event.target.classList.add('activo');//aplicamos la clase al elemento que le hice el click
       
      
      })

 })



