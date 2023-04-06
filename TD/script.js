const addButton = document.getElementById("additionBtn");
const substractButton = document.getElementById("SoustraireBtn");
const nombre1 = document.getElementById("number1");
const nombre2 = document.getElementById("number2");

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const num1 = parseFloat(nombre1.value);
  const num2 = parseFloat(nombre2.value);

  if (isNaN(nombre1.value) || isNaN(nombre2.value)) {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  sendDataFromApi(num1, num2);
  getDataFromApi();
});

async function sendDataFromApi(number1, number2) {
  const api_url = "http://localhost:5000/addition";
  const response = await fetch(api_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{
        "num1": ${number1}, 
        "num2": ${number2}
    }`,
  });

  response.json().then((data) => {
    console.log(JSON.stringify(data));
  });
}

async function getDataFromApi() {
  const result = document.getElementById("resultat");
  let updatedResult = result.value;

  const api_url = "http://localhost:5000/resultat";
  const response = await fetch(api_url);
  const data = await response.json();

  result.value = data.result;
} 

