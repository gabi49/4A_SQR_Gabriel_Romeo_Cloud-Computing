// DOM elements
const tweetInput = document.querySelector('#tweet-input');
const tweetButton = document.querySelector('#tweet-button');
const topicList = document.querySelector('#topic-list');
const tweetList = document.querySelector('#tweet-list');

// Topics
const topics = {
  food: ['I love pizza', 'Burgers are the best', 'Sushi is my favorite'],
  sports: ['Basketball is my favorite sport', 'Football is the best', 'Baseball is boring'],
  music: ['I love listening to jazz', 'Rock and roll is the best', 'Hip hop is my favorite']
};

// Event listeners
tweetButton.addEventListener('click', () => {
  const tweetText = tweetInput.value.trim();
  if (tweetText !== '') {
    addTweet(tweetText);
    tweetInput.value = '';
  }
});

