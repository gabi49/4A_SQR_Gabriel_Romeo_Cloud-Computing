# Utiliser une image de base
FROM nginx:latest

# Copier les fichiers du frontend dans le dossier de travail de Nginx
COPY page1.html /usr/share/nginx/html/
COPY page2.html /usr/share/nginx/html/
COPY page3.html /usr/share/nginx/html/
COPY page4.html /usr/share/nginx/html/
COPY page5.html /usr/share/nginx/html/
COPY twitter.css /usr/share/nginx/html/
COPY twitter.html /usr/share/nginx/html/
COPY twitter.js /usr/share/nginx/html/

# Exposer le port 80 pour que Nginx soit accessible depuis l'extérieur
EXPOSE 80

