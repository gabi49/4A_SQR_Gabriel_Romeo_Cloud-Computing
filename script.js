const form = document.querySelector('#calculator-form');

function additionner() {
    var nombre1 = parseInt(document.getElementById("number1").value);
    var nombre2 = parseInt(document.getElementById("number2").value);
    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }
    fetch('http://gabi49-solid-parakeet-jwxq769r5v4h97r.github.dev/pf-signin?visibility=private&port=5000&cid=5ed888b8bbd70774f01897d52450ecb6/addition', {
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
    .catch(error => console.error(error));
}