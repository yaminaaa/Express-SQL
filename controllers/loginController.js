const dataMapper = require("../dataMapper");

const loginController = {
  getLoginPage(req, res) {
    res.render('login', { error : '' });
  },
  async submitLoginPage(req, res) {
    const username = req.body.username;

    const user = dataMapper.getOneUserbyUsername(username);
    
    if(user) {
      // alors je me connecte
       res.redirect('/admin'); // redirige toi vers /admin
    } else {
      // afficher erreur
      res.render('login', { error: 'error'});
    }
  }
}

module.exports = loginController;