// Récupérer l'élément HTML qui contiendra les divs de tweet
var tweet_layout = document.getElementById("tweet_layout");

//Appel de la fonction qui va afficher nos tous les tweets sur la pae d'acceuil
getDataFromApi();

// Affichage des tweets d'un utilisateur
async function getDataFromApi() {
  const api_url = "http://localhost:5000/";
  // Récupérer les données depuis l'API Python
  const response = await fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // Parcourir les données pour créer un élément div pour chaque hôtel
      data.forEach((tweet) => {
        // Créer un nouvel élément div pour chaque élément d'un tweet
        var divtweet = document.createElement("div");
        var divAuthor = document.createElement("div");
        var divmessage = document.createElement("div");
        var divtopics = document.createElement("div");
        var retweet_info = document.createElement("div");

        // Ajouter une classe aux éléments div
        divtweet.className = "tweet";
        divAuthor.className = "author";
        divmessage.className = "message";
        retweet_info.className = "retweet_info";
        divtopics.className = "topic";

        // Ajouter le nom de l'hôtel comme contenu de l'élément div
        var Autheur = document.createTextNode(tweet.author);
        var Aut = document.createTextNode(
          "Username :" + " " + " " + Autheur.textContent
        );
        divAuthor.appendChild(Aut);
        divtweet.appendChild(divAuthor);

        var Message = document.createTextNode(tweet.tweet);
        var twt = document.createTextNode(
          "tweet:" + " " + " " + Message.textContent
        );
        divmessage.appendChild(twt);
        divtweet.appendChild(divmessage);

        if (tweet.sujet != null) {
          var Topic = document.createTextNode(tweet.sujet);
          var sujet = document.createTextNode(
            "Topic :" + " " + " " + Topic.textContent
          );
          divtopics.appendChild(sujet);
          divtweet.appendChild(divtopics);
        }

        if (tweet.retweeted_from != null) {
          var Retweet_info = document.createTextNode(tweet.retweeted_from);
          var retweet = document.createTextNode(
            "Retweted from the tweet with the id :" +
              " " +
              " " +
              Retweet_info.textContent
          );
          retweet_info.appendChild(retweet);
          divtweet.appendChild(retweet_info);
        }

        // Ajouter l'élément div au conteneur
        tweet_layout.appendChild(divtweet);
      });
    })
    .catch((error) => console.error(error));
}

// Affichage des tweets liés à un sujet
