const Envoyer = document.getElementById("submit-retweet");
const Username = document.getElementById("username");
const Tweet_id = document.getElementById("tweet-id");

// Retweet d'un tweet
Envoyer.addEventListener("click", function (event) {
  event.preventDefault();

  const username = Username.value;
  const tweet_id = Tweet_id.value;
  //const Topic = toString(topic.value);

  if (username == null || tweet_id == null) {
    alert("Veuillez remplir tous les champs !");
    return false;
  }

  sendDataToApi(username);
  alert("Le retweet a été executé avec succès !");
});

async function sendDataToApi(username) {
  const tweet_id = Tweet_id.value;
  const baseUrl = "http://localhost:5000";
  const endpoint = "/retweet";

  const api_url = `${baseUrl}${endpoint}/${tweet_id}`;

  const response = await fetch(api_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: `{
            "username": "${username}"
        }`,
  });

  response.json().then((data) => {;
    console.log(JSON.stringify(data));
  });
}