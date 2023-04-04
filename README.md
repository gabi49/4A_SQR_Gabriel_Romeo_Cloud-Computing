# 4A_SQR_Gabriel&Romeo_Cloud-Computing
Auteurs :
Kameni Gabriel,
Koularambaye Romeo 

Ce projet est une application Web qui permet aux utilisateurs de publier des tweets, de suivre les tweets publiés par d'autres utilisateurs, de retweeter des tweets et de suivre les sujets populaires.

Le projet est divisé en deux parties :

##### 1-Frontend:Il s'agit de l'interface utilisateur de l'application qui est développée en utilisant html,css et js.

##### 2-Backend: Il s'agit de la partie serveur de l'application qui est développée en utilisant le framework Flask. Il utilise une base de données Redis pour stocker les tweets, les utilisateurs, les sujets et les retweets.

# Utilisation
## Frontend
Ouvrir un navigateur Web et accéder à l'URL de l'application.

*S'inscrire ou se connecter en utilisant un compte existant.

*Publier un tweet en utilisant le formulaire de publication.

*Retweeter un tweet en cliquant sur l'icône de retweet.

*Suivre les tweets d'un utilisateur en cliquant sur le bouton de suivi.

*Suivre les tweets liés à un sujet en cliquant sur le sujet.

## Backend
Accéder aux différentes routes du backend à partir de l'URL du backend.

*La route GET / permet de récupérer tous les tweets.

*La route POST /Addtweets permet d'enregistrer un tweet dans Redis.

*La route GET /tweets/<username> permet de récupérer les tweets d'un utilisateur.

*La route POST /retweet/<tweet_id> permet de retweeter un tweet.

*La route GET /topics permet de récupérer tous les sujets.

*La route GET /tweets/<topic> permet de récupérer tous les tweets liés à un sujet.


# Conclusion
Le frontend et le backend sont deux éléments essentiels pour le développement d'une application web. Le frontend est la partie visible de l'application, ce qui permet à l'utilisateur d'interagir avec l'interface graphique. Il est important d'avoir un frontend bien structuré pour offrir une expérience utilisateur agréable.
Le backend, quant à lui, est la partie invisible de l'application qui gère la logique et les fonctionnalités du site web. Il est responsable du stockage, de la gestion et de la manipulation des données, ainsi que de la communication entre le serveur et le client. Il est essentiel que le backend soit fiable, sécurisé et efficace pour assurer un fonctionnement optimal de l'application.
