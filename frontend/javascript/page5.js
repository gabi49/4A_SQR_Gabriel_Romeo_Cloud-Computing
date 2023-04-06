// Récupérer l'élément HTML qui contiendra les divs de tweet
const afficher = document.getElementById("get-all-topics");
const user_tweets_list = document.getElementById("topics-list");
const Sujet = document.getElementById("sujet");

// Affichage des tweets d'un utilisateur
afficher.addEventListener("click", function (event) {
  event.preventDefault();

  if (Sujet.value == null) {
    alert("Veuillez correctement remplir le champs !");
    return false;
  }

  getDataFromApi();
});

async function getDataFromApi() {
  const topic = Sujet.value;
  const baseUrl = "http://localhost:5000";
  const endpoint = "/tweet";

  const api_url = `${baseUrl}${endpoint}/${topic}`;
  //clearResults(); //effecer la liste à chaque fois

  // Récupérer les données depuis l'API Python
  const response = await fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // Parcourir les données pour créer un élément div pour chaque tweet
      data.forEach((tweet) => {
        // Créer un nouvel élément div pour tweet
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
