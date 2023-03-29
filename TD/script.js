const form = document.querySelector('#calculator-form');
const addButton = document.getElementById('additionBtn');
const substractButton = document.getElementById('Soustraire');

addButton.addEventListener('click', function() {

    const nombre1 = parseInt(document.getElementById("number1").value);
    const nombre2 = parseInt(document.getElementById("number2").value);

    console.log("preif");
    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }
    console.log(nombre1);
    fetch("http://locahost:5000/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("infetch")
        console.log(data);
        const result = document.getElementById('result');
        result.innerHTML = data.result;
       
    })
    .catch(e => console.log(e));
    console.log("postFetch");
});


substractButton.addEventListener('click', function() {
    const nombre1 = parseInt(document.getElementById("number1").value);
    const nombre2 = parseInt(document.getElementById("number2").value);

    if (isNaN(nombre1) || isNaN(nombre2)) {
        alert("Veuillez remplir tous les champs !");
        return false;
    }

    fetch('http://localhost:5000/soustraction', {
        method: 'POST',
        body: JSON.stringify({nombre1: nombre1, nombre2: nombre2}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const result = document.getElementById('result');
        result.innerHTML = data.result;
    })
    .catch(error => {
        // Gérez les erreurs ici
    });
});
