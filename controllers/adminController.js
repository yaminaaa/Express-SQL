const adminController = {
  getAdminDashboard(req, res) {
    res.render('admin/index', { username: "toto" });
  }
}

module.exports = adminController;