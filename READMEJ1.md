# O'Blog

| L'objectif de ce projet est de créer un blog simple avec lequel nous allons poursuivre ensuite le cours et l'affichage d'un formulaire de contact.

| Le projet qui vous a été donné contient déjà une partie de l'interface de prêt. Il y a plus de fichiers que vous avez besoin mais il serviront dans les jours à venir en cours !!

# Etape 0 
- Créer comme dans le challenge de l'étape 15 une base de donnée et un user `oblog` 
- Créez ensuite 2 fichiers dans le dossier `sql` : `00_create.sql` et `01_insert.sql`.

Le premier fichier va devoir créer deux tables dans notre nouvel base de donnée 
- post : Un post est défini par les propriétés suivantes : `title`, `author`, `content`, `date`
- commentaire : Un commentaire est défini par les propriété suivantes : `author` et `content` et un champ `post_id` qui est une clef étrangère vers le post

**ATTENTION !** Le nom et la case des champs est important pour le déroulé de l'exercice ! Ne pas prendre de libertés !!! 

Le second va remplir notre base de donnée, ajoutez 2/3 articles et 2/3 entrées d etest .

Par souci de simplicité l'auteur sera uniquement un champ texte sur les deux tables

| Tips : Basez vous sur les fichiers crée lors du challenge E15

# Etape 0.5

Executez la commande `npm install` afin d'installer toutes les dépendances

# Etape 1
- Vous allez ensuite devoir créer les routes et controllers nécessaires pour afficher les pages.
  - Créer un nouveau routeur `main` (`main`) pour gérer les routes de la page d'accueil (qui contiendra les articles de blog) et de l'affichage du formulaire de contact
- Ces deux routes répondront aux urls suivant :
  - `/` : La page d'accueil qui contient la liste des articles
  - `/contact` : Le formulaire de contact

Commencez par créer le routeur puis ajouter les actions dans un nouveau controller `./controllers/mainController.js`.

Afin de chercher à les intégrer avec les vues vérifiez que vos routes et controllers fonctionnent bien avec un `res.send`

# Etape 2 

Créez un module `db.js` à la racine du projet et effectuez la connexion vers la base de donnée.
  - cf. le `db.js` du projet d’aujourd’hui.

Ne pas oublier le module.exports !!

# Etape 3 

Dans l'action "page d'accueil" du mainController effectuez la requête afin de récupérer tous les posts de notre blog depuis la base à l'aide de `client.query`.

Pensez à mettre la fonction en `async` pour pouvoir utiliser `await` ! 

Effectuer le rendu à l'aide de la ligne suivante `res.render('index', { posts: data.rows })`;

# Etape 4 

Modifier l'action du formulaire de contact avec le rendu suivant : `res.render('contact');`


# BONUS 💪

~~Rajoutez une vue~~, une action dans le controller et une route pour gérer l'affichage d'un post en particulier avec les commentaires


