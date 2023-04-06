// Récupérer l'élément HTML qui contiendra les divs de sujet
var topic_tweets_list = document.getElementById("topic-tweets-list");

//Appel de la fonction qui va afficher nos tous les sujet la l'app
getDataFromApi();

// Affichage des sujets
async function getDataFromApi() {
  const api_url = "http://localhost:5000/topics";
  // Récupérer les données depuis l'API Python
  const response = await fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // Parcourir les données pour créer un élément div pour chaque sujet
      data.forEach((sujet) => {
        // Créer un nouvel élément div pour le sujet
        var divtopics = document.createElement("div");

        // Ajouter une classe aux éléments div
        divtopics.className = "topic";

        // Ajouter le nom du sujet comme contenu de l'élément div
        var Sujet = document.createTextNode(sujet);
        divtopics.appendChild(Sujet);

        // Ajouter l'élément div au conteneur
        topic_tweets_list.appendChild(divtopics);
      });
    })
    .catch((error) => console.error(error));
}
