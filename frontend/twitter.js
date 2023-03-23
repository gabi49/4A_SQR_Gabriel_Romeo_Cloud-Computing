// Récupérer le formulaire d'écriture de tweet
const tweetForm = document.querySelector('#tweet-form');

// Ajouter un gestionnaire d'événement pour le soumission du formulaire
tweetForm.addEventListener('submit', event => {
  // Empêcher la soumission du formulaire par défaut
  event.preventDefault();

  // Récupérer le texte du tweet entré par l'utilisateur
  const tweetText = document.querySelector('#tweet-text').value;

  // Envoyer une requête POST à l'API pour ajouter le nouveau tweet
  fetch('/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: tweetText })
  })
  .then(response => response.json())
  .then(data => {
    // Ajouter le nouveau tweet à la liste des tweets affichés sur la page
    // ...
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout du tweet :', error);
  });
});
