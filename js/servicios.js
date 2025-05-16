document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carrusel-item");
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let active = 0;

    function loadShow() {
        let stt = 0;

         items.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.zIndex = 0;
        item.style.transform = "scale(0.8)";
        item.style.filter = "blur(5px)";
      });

        // Elemento activo central
        items[active].style.transform = 'none';
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Elementos a la derecha
        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0;

        // Elementos a la izquierda
        for (let i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    next.onclick = function () {
        if (active < items.length - 1) {
            active++;
            loadShow();
        }
    };

    prev.onclick = function () {
        if (active > 0) {
            active--;
            loadShow();
        }
    };

    loadShow(); // Mostrar al cargar
});
