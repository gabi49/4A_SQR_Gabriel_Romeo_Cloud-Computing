# BACKEND CLOUD COMPUTING

### Auteurs:
KAMENI Gabriel, KOULARAMBAYE ROMEO

Ce backend a été développé pour le projet Twitter Cloud Computing qui permet aux utilisateurs d'enregistrer des tweets, de les afficher et de les organiser par sujet.

# Fonctionalités
#### -Afficher tous les tweets enregistrés dans Redis;
#### -Enregistrer un nouveau tweet dans Redis;
#### -Récupérer les tweets d'un utilisateur en utilisant son nom d'utilisateur;
#### -Retweeter un tweet existant;
#### -Récupérer tous les sujets enregistrés;
#### -Afficher tous les tweets associés à un sujet.

# Technologies utilisées
### -Python;
### -Flask ;
### -Redis (base de données clé-valeur).

# Utilisation du backend
#### -Installer Redis;
#### -Installer les dépendances Python ;
#### -Démarrer le serveur en exécutant le fichier tweet.py.

# Endpoints
### Afficher tous les tweets
-URL: /;
-Méthode HTTP: GET;
-Retourne: tous les tweets enregistrés dans Redis au format JSON;

### Enregistrer un nouveau tweet
-URL: /Addtweets;
-Méthode HTTP: POST.

### Récupérer les tweets d'un utilisateur
-URL: /tweets/<username>;
-Méthode HTTP: GET;
-Retourne: tous les tweets de l'utilisateur au format JSON.
  
### Récupérer tous les sujets enregistrés
-URL: /topics
-Méthode HTTP: GET
-Retourne: tous les sujets enregistrés au format JSON

 ### Afficher tous les tweets associés à un sujet
-URL: /tweets/<topic>
-Méthode HTTP: GET
-Retourne: tous les tweets associés au sujet au format JSON
   
  
