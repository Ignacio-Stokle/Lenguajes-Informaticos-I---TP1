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