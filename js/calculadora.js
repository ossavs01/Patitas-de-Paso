/*
let total = 0;
const precios = {
    cumpleaños: 45000,
    guarderia: 25000,  // Se cobrará por día
    paseos: 10000,
    spa: 80000
};

const listaServicios = document.getElementById("listaServicios");

document.getElementById("servicio").addEventListener("change", actualizarMensaje);
document.getElementById("dias").addEventListener("input", actualizarMensaje);

function actualizarMensaje() {
    let servicio = document.getElementById("servicio").value;
    let mensaje = `Servicio seleccionado: ${servicio.charAt(0).toUpperCase() + servicio.slice(1)} - Precio: `;

    if (servicio === "guarderia") {
        let dias = parseInt(document.getElementById("dias").value);
        mensaje += `$${precios[servicio]} por día (${dias} días = $${precios[servicio] * dias})`;
        document.getElementById("diasContainer").style.display = "block";
    } else {
        mensaje += `$${precios[servicio]}`;
        document.getElementById("diasContainer").style.display = "none";
    }

    document.getElementById("mensaje").innerText = mensaje;
}

document.getElementById("opcion1").addEventListener("click", function() {
    let servicio = document.getElementById("servicio").value;
    let costo = precios[servicio];
    let descripcion = servicio.charAt(0).toUpperCase() + servicio.slice(1);

    if (servicio === "guarderia") {
        let dias = parseInt(document.getElementById("dias").value);
        costo *= dias;
        descripcion += ` (${dias} días)`;
    }

    total += costo;
    document.getElementById("total").innerText = total;

    let nuevoServicio = document.createElement("li");
    nuevoServicio.innerHTML = `${descripcion} - $${costo} <button class="eliminar">X</button>`;
    
    nuevoServicio.querySelector(".eliminar").addEventListener("click", function() {
        total -= costo;
        document.getElementById("total").innerText = total;
        listaServicios.removeChild(nuevoServicio);
    });

    listaServicios.appendChild(nuevoServicio);

    alert("Servicio agregado. ¿Desea escoger otro?");
});

document.getElementById("opcion2").addEventListener("click", function() {
    alert("Servicio no agregado. Puede elegir otro si lo desea.");
});

document.getElementById("finalizarCompra").addEventListener("click", function() {
    if (total > 0) {
        alert(`Total a pagar: $${total}`);
    } else {
        alert("No has seleccionado ningún servicio.");
    }
});