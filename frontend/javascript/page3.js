// Récupérer l'élément HTML qui contiendra les divs de tweet

const afficher = document.getElementById("get-user-tweets");
const user_tweets_list = document.getElementById("user-tweets-list");
const Username = document.getElementById("username");

// Affichage des tweets d'un utilisateur
afficher.addEventListener("click", function (event) {
  event.preventDefault();

  if (Username.value == null) {
    alert("Veuillez correctement remplir le champs !");
    return false;
  }

  getDataFromApi();
});

async function getDataFromApi() {
  const username = Username.value;
  const baseUrl = "http://localhost:5000";
  const endpoint = "/tweets";

  const api_url = `${baseUrl}${endpoint}/${username}`;
  clearResults(); //effecer la liste à chaque fois

  // Récupérer les données depuis l'API Python
  const response = await fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // Parcourir les données pour créer un élément div pour chaque tweet
      data.forEach((tweet) => {
        // Créer un nouvel élément div pour le tweet
        var divtweet = document.createElement("div");

        // Ajouter une classe à l'élément div
        divtweet.className = "tweet";

        // Ajouter le nom de le texte comme contenu de l'élément div
        var Text = document.createTextNode(tweet.tweet);
        divtweet.appendChild(Text);

        // Ajouter l'élément div au conteneur
        user_tweets_list.appendChild(divtweet);
      });
    })
    .catch((error) => console.error(error));
}
