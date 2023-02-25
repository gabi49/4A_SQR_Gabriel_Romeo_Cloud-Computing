const form = document.querySelector('#calculator-form');

function additionner() {
    var nombre1 = parseInt(document.getElementById("number1").value);
    var nombre2 = parseInt(document.getElementById("number2").value);
    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }
    fetch('https://gabi49-solid-parakeet-jwxq769r5v4h97r-5000.preview.app.github.dev/', {
        method: 'POST',
        body: JSON.stringify({nombre1: nombre1, nombre2: nombre2}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultat").value = data.resultat;
    })
    .catch(error => {
        // Gérez les erreurs ici
      });
}