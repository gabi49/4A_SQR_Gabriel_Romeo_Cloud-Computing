#  FRONTEND CLOUD COMPUTING

##### Auteurs:
KAMENI GABRIEL,
KOULARAMBAYE ROMEO

Ce projet est une application web similaire à Twitter, permettant aux utilisateurs de tweeter, retweeter, rechercher des tweets et des sujets, et afficher les tweets d'un utilisateur ou liés à un sujet.

# Le projet est composé des fichiers suivants :

#### -twitter.html :  la page d'accueil de l'application;
#### -page1.html : la page pour envoyer un nouveau tweet;
#### -page2.html : la page pour retweeter un tweet existant;
#### -page3.html : la page pour afficher les tweets d'un utilisateur;
#### -page4.html : la page pour afficher les tweets liés à un sujet;
#### -page5.html : la page pour afficher les sujets populaires;
#### -twitter.css : la feuille de style CSS pour l'application;
#### -twitter.js : le code JavaScript pour effectuer les différentes actions de l'application.

# Fonctionnalités du code JavaScript :

-sendTweet(username, message, topic) : envoie un nouveau tweet en utilisant une requête POST à l'API du serveur backend;

-getUserTweets(username) : récupère les tweets d'un utilisateur donné en utilisant une requête GET à l'API du serveur backend;

-retweet(tweet_id, username) : retweete un tweet existant en utilisant une requête POST à l'API du serveur backend;

-getTopics() : récupère la liste des sujets populaires en utilisant une requête GET à l'API du serveur backend;

-getTopicTweets(topic) : récupère les tweets liés à un sujet donné en utilisant une requête GET à l'API du serveur backend;

Ces différentes pages HTML de l'application utilisent le code JavaScript pour effectuer les actions correspondantes. La page d'accueil twitter.html affiche le logo de Twitter et des boutons pour accéder aux différentes fonctionnalités de l'application.

# Utilisation de l'application:
Pour utiliser l'application, on se sert de notre serveur backend qui fournit une API avec les endpoints nécessaires pour effectuer les différentes actions. Les URLs des endpoints sont définies dans le code JavaScript et peuvent être modifiées en fonction de l'implémentation du serveur backend.
Pour démarrer l'application, il suffit d'ouvrir la page d'accueil index.html dans un navigateur web.

# CLOUD COMPUTING 4A-SQR
