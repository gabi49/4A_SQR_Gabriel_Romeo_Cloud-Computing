// Envoi d'un nouveau tweet
function sendTweet(username, message, topic) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/Addtweets");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  console.log(xhr.responseText);
  alert("Le tweet a été envoyé avec succès !");
  }
  };
  var data = JSON.stringify({
  "username": username,
  "tweet": message,
  "#": topic
  });
  xhr.send(data);
  }
  
  // Affichage des tweets d'un utilisateur
  function getUserTweets(username) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/tweets/" + username);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  var tweets = JSON.parse(xhr.responseText);
  console.log(tweets);
  // Code pour afficher les tweets dans la page HTML
  }
  };
  xhr.send();
  }
  
  // Retweet d'un tweet
  function retweet(tweet_id, username) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/retweet/" + tweet_id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  console.log(xhr.responseText);
  alert("Le retweet a été effectué avec succès !");
  }
  };
  var data = JSON.stringify({
  "username": username
  });
  xhr.send(data);
  }
  
  // Affichage des sujets
  function getTopics() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/topics");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  var topics = JSON.parse(xhr.responseText);
  console.log(topics);
  // Code pour afficher les sujets dans la page HTML
  }
  };
  xhr.send();
  }
  
  // Affichage des tweets liés à un sujet
  function getTopicTweets(topic) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/tweets/" + topic);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  var tweets = JSON.parse(xhr.responseText);
  console.log(tweets);
  // Code pour afficher les tweets liés au sujet dans la page HTML
  }
  };
  xhr.send();
  }
  
  // Exemples d'utilisation des fonctions
  sendTweet("Alice", "salut", "romeo");
  getUserTweets("Alice");
  retweet("123456789", "Bob");
  getTopics();
  getTopicTweets("romeo");
