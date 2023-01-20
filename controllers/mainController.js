const dataMapper = require('../dataMapper');

const mainController = {
  async getHomepage(req, res) {
    const posts = await dataMapper.getAllPosts();
    res.render('index', { posts: posts });
  },

  getContactPage(req, res) {
    res.render('contact');
  },
  async getBlogPost(req, res) {
    const id = req.params.id;

    // DEUX ACTIONS A FAIRE
        // -> GERER un plantage par le client.query => try/catch
        // -> Est-ce que la donnée existe => if

    try { // J'essaye d'executer un code qui peut potentiellement planter
      const post = await dataMapper.getOnePost(id);

      if(post) { // Si j'ai un post alors je fais la suite
        const comments = await dataMapper.getAllPostComments(id);

        console.log(comments);
        res.render('blogPost', { post: post, comments: comments });
      } else {
        res.send('Post introuvable');
      }
    } catch(err) {  // Je gère proprement l'erreur
      console.error(err);
      res.send(`Une erreur s'est produite`);
    }

  },
  submitContactForm(req, res) {

    res.render('contactSent',  { data: req.body });
  },
  async submitComment(req, res) {
    try {
      await dataMapper.createComment(req.params.id, req.body.author, req.body.content);

      res.redirect('/posts/' + req.params.id);

    } catch(err) {
      console.error(err);
      res.send("ERROR");
    }
  }
}

module.exports = mainController;