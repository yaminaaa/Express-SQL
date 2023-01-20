# oBlog PART 2

# Etape 0 

Vous venez de récupérer une nouvelle version du projet, un petit `npm install` est de rigeur.


# Etape 1 

Modifier le `blogPost.ejs` dans le dossier views afin d'y ajouter un formulaire avec une méthode POST et deux champs et un bouton de soumission: 
- `author` 
- `content` 

# Etape 2 
Créer une route de type `POST` pour `/post/:id` afin de récupérer les valeurs du formulaire et une action dans le `mainController`.

N'hesitez pas à tester avec un petit `console.log(req.body)`

Tips : route de type POST = router.post

# Etape 3 

Ajouter une fonction à notre dataMapper : `createComment` qui prend en paramètre un `author` et un `content`

Comme les autres fonctions du dataMapper cette fonction appelera un `client.query` mais au lieu de construire une requete `SELECT` cette fois-ci, il faut fabriquer une requête de type `INSERT INTO` dont la partie `VALUES` aura les valeurs issue des paramètres de la fonction.

# Etape 4 

Brancher le dataMapper à notre controller.

Une fois l'enregistrement effectué faites une redirection de la façon suivante : `res.redirect('/post/' + id);`# Express-SQL
