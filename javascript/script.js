const url = 'https://jsonplaceholder.typicode.com/users/1/posts';

function fillTheCarousel(jsondata) {
    jsondata.forEach(element => {
        let carouseldiv = document.querySelector('#carousel');
        let elementdiv = document.createElement('div');
        let title = document.createElement('p');
        title.textContent = element.title;
        carouseldiv.appendChild(elementdiv);
        elementdiv.appendChild(title);
    })
}

function apiCall() {
    fetch(url) // asynchrone
        .then(response => response.json())
        .then(json => {
// 3. Pour chaque élément de la liste, ajouter un élément au futur carousel
            fillTheCarousel(json);
// 4. Déclencer le carousel !
            $('#carousel').carouFredSel({
                responsive: true,
                align: "center",
                direction: 'left'
            });
        });
}

$(document).ready(function () {
// Cliquer sur le bouton "Charger la liste" doit :
// 1. Gérer le click sur le bouton
    let bouton = document.querySelector('#declencheur');
    bouton.addEventListener('click', function (event) {
// 2. Appeler une api
        apiCall();
    });
});