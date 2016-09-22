(function() {
    'use strict';

    // ici on reçoit les données
    document.querySelector("#ID_BUTTON").addEventListener('click', function(e) {
        e.preventDefault();
        let city = document.getElementById("Ville_asaisir").value;
        let request = new XMLHttpRequest();

        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=f7c9c265d91124fb2cd0a518aef214dc&units=metric', true);

        request.onreadystatechange = function(e) {
            if (request.readyState === 4) {
                if (request.status === 200) {

                    // Affichage résultats
                    let weather = JSON.parse(request.responseText);
                      console.log(weather);
                    // insertion des éléments
                    document.body.innerHTML = 'Actuellement il fait ' + weather.main.temp;


                } else {
                    alert('Erreur de chargement ');
                }
            }
        }
        request.send();
    });








})();
