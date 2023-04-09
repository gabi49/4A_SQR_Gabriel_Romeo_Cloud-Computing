#Enregistrer de nouveau
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Romeo\", \"tweet\": \"Hello Josepha!\", \"#\": \"Politesse\"}" http://localhost:5000/Addtweets
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Gabriel\", \"tweet\": \"Hello Josepha!\", \"#\": \"Politesse\"}" http://localhost:5000/Addtweets
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Romeo\", \"tweet\": \"Il y'a des projets pour l'ecole?\", \"#\": \"Ecole\"}" http://localhost:5000/Addtweets
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Gabriel\", \"tweet\": \"oui je crois, cloud computing\", \"#\": \"Ecole\"}" http://localhost:5000/Addtweets

