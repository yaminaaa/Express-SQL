// Le point de depart de mon appli
// -> La mise d'express
// -> La configuration d'express
// -> Le lancement du server 

// J'importe express
const express = require('express');

// Pour pouvoir utiliser un routeur modulaire je vais importer celui-ci à l'aide de require
const myRouter = require('./routes/router')

const PORT = 3000; // BP : On définit le port sous forme d'une constante en haut du document, ça évite de fouiller dans le code lorsqu'on souhaite changer le port 

// J'initialise express : Je crée une instance d'express.
const app = express();

// Après je vais pouvoir configurer express
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


// Le dossier c'est la ou je vais mettre les fichier dites static 
// static : les fichiers qui seront envoyé tels quels au navigateur 
app.use(express.static('public')); // Tu iras chercher et servira les fichiers statics depuis ce dossier

// Pour utiliser un routeur j'utilise app.use(<mon router>);
app.use(myRouter);

// On ne peut pas mettre tous les routes dans un seul et même fichier
// Tant qu'on sur un petit projet ça paaaaaaaaaasssssssee mais on s'y perd vite 
// On peut donc modularisé les routeurs : cf. ./routes/router.js

// je n'ai plus qu'a le lancer
// je lui donne le port et un callback qui sera appelé lorsque le serveur est prêt
app.listen(PORT, () => {
  console.log('Ready and available on : http://localhost:' + PORT);
});
