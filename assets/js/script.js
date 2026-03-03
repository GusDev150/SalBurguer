function filtrar(categoria) {

    const cards = document.querySelectorAll(".cards");

    cards.forEach(function(card) {

        const categorias = card.dataset.categoria.split(" ");

        if (categoria === "todos") {
            card.style.display = "flex";
        } 
        
        else if (categorias.includes(categoria)) {
            card.style.display = "flex";
        } 
        
        else {
            card.style.display = "none";
        }

    });

}