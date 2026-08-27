function mostraSezione(nome) {

    const sezioni = document.querySelectorAll(".sezione");

    sezioni.forEach(sezione => {
        sezione.style.display = "none";
    });

    const sezione = document.getElementById(nome);

    sezione.style.display = "block";

    sezione.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
const loadingText = document.querySelector("#loading-screen p");

const testiCaricamento = [
    "Caricamento...",
    "Caricamento..",
    "Caricamento.",
    "Caricamento..."
];

let indiceCaricamento = 0;

setInterval(() => {
    indiceCaricamento++;

    if (indiceCaricamento >= testiCaricamento.length) {
        indiceCaricamento = 0;
    }

    loadingText.textContent = testiCaricamento[indiceCaricamento];
}, 400);
