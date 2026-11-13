// FORM CONTACTO - OVERLAY OCULTO
const formulario = document.querySelector(".contacto-formulario");

function mostrarTarjeta(id) {
    document.getElementById(id).classList.remove("d-none");
    document.getElementById("overlay").classList.add("mostrar");
}

function cerrarTarjeta(id) {
    document.getElementById(id).classList.add("d-none");
    document.getElementById("overlay").classList.remove("mostrar");
}

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        mostrarTarjeta("opciones-de-pago");
    });
}

function seleccionarPlan(id) {
    cerrarTarjeta(id);
    formulario.submit();
    alert("Plan seleccionado con exito");
}

// BOTON MODO OSCURO Y MODO CLARO
const botonOscuroClaro = document.getElementById("btn-tema");

botonOscuroClaro.addEventListener("click", () =>{
    const html = document.documentElement;

    if(html.dataset.tema === "oscuro"){
        html.dataset.tema = "claro";
    }
    else{
        html.dataset.tema = "oscuro";
    }
});

// NavBar pestaña activa
const navLinks = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinks.forEach(navLink => {
    const LinkPathName = new URL(navLink.href).pathname;

    if(LinkPathName === windowPathname) {
        navLink.classList.add('active');
    }
})