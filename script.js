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