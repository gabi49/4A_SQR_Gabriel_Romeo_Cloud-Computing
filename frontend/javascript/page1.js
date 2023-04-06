const envoyer = document.getElementById("submit-tweet");
const username = document.getElementById("username");
const tweet = document.getElementById("tweet");
const topic = document.getElementById("topic");

// Envoi d'un nouveau tweet
envoyer.addEventListener("click", function (event) {
  event.preventDefault();

  const Username = username.value;
  const Tweet = tweet.value;
  const Topic = topic.value;

  if (Username == null || Tweet == null) {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  sendDataToApi(Username, Tweet, Topic);
  alert("Le tweet a été envoyé avec succès !");
});

async function sendDataToApi(username, tweet, topic) {
  const api_url = "http://localhost:5000/Addtweets";
  const response = await fetch(api_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{
          "username": "${username}", 
          "tweet": "${tweet}",
          "#": "${topic}"
      }`,
  });

  response.json().then((data) => {
    console.log(JSON.stringify(data));
  });
}
