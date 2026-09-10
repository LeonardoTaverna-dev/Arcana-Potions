/* =====================================================
   ARCANA POTIONS
   SISTEMA DE TEMAS
===================================================== */

const temaBtn = document.getElementById("temaBtn");
const temaIcone = document.getElementById("temaIcone");
const temaTexto = document.getElementById("temaTexto");

function aplicarTema(tema) {

    if (tema === "sangue") {

        document.body.classList.add("modo-sangue");

        if (temaIcone) {
            temaIcone.textContent = "◉";
        }

        if (temaTexto) {
            temaTexto.textContent = "BLOOD";
        }

    } else {

        document.body.classList.remove("modo-sangue");

        if (temaIcone) {
            temaIcone.textContent = "☾";
        }

        if (temaTexto) {
            temaTexto.textContent = "NIGHT";
        }
    }
}


/* =====================================================
   RECUPERA O TEMA SALVO
===================================================== */

const temaSalvo = localStorage.getItem("arcanaTema");

if (temaSalvo) {
    aplicarTema(temaSalvo);
} else {
    aplicarTema("noite");
}


/* =====================================================
   BOTÃO DE TROCA
===================================================== */

if (temaBtn) {

    temaBtn.addEventListener("click", function () {

    temaBtn.classList.remove("trocando");

    void temaBtn.offsetWidth;

    temaBtn.classList.add("trocando");


    const sangueAtivo =
        document.body.classList.contains("modo-sangue");


    setTimeout(function () {

        if (sangueAtivo) {

            aplicarTema("noite");
            localStorage.setItem("arcanaTema", "noite");

        } else {

            aplicarTema("sangue");
            localStorage.setItem("arcanaTema", "sangue");

        }

    }, 300);

});
}