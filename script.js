const form = document.querySelector('#calculator-form');

function additionner() {
    var nombre1 = parseInt(document.getElementById("number1").value);
    var nombre2 = parseInt(document.getElementById("number2").value);
    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }
    fetch('http://127.0.0.1:5000/addition', {
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