function getFilmes() {
    
}

const filme = 
            [
                {title:"Castle in the Sky", image:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"},
                {title:"Grave of the Fireflies", image:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg"},
                {title:"My Neighbor Totoro", image:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"},
                {title:"Kiki's Delivery Service", image:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg"},
            ]

function criarCards(filme){

    let card = document.createElement('div')
    card.className = 'card'

    let imagemFilme = document.createElement('img')
    imagemFilme.src = filme.image

    let filmeName = document.createElement('span')
    filmeName.textContent = filme.title

    card.appendChildren(imagemFilme, filmeName)

    return card
}

function preencher() {
    const cardsContainer = document.getElementById('card-container')

    const cards = filme.map(criarCards)
    cardsContainer.replaceChildren(...cards)
}

document.getElementById('btn-search').addEventListener('click', preencher)