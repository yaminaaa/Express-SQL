const client = require('./db');

const dataMapper = {
  async getAllPosts() {
    const data = await client.query(`SELECT * FROM post`);

    return data.rows;
  },
  async getOnePost(id) {
    const data = await client.query(`SELECT * FROM post WHERE id=${id}`);

    return data.rows[0];
  }, 
  async getAllPostComments(id) {
    const data = await client.query(`SELECT * FROM comment WHERE post_id=${id}`);

    return data.rows;
  },

  async getAllComments() {
    const data = await client.query(`SELECT * FROM comment`);

    return data.rows;
  },
  async getOneComment(id) {
    const data = await client.query(`SELECT * FROM comment WHERE id=${id}`);

    return data.rows[0];
  }, 
  async createComment(post_id, author, content) {
    await client.query(`INSERT INTO "comment" ("post_id", "author", "content" ) VALUES (${post_id}, '${author}', '${content}')`);
  },
  async getAllUsers() {
   const data = await client.query(`SELECT * FROM "user"`);

   return data.rows;
 },
 async getOneUser(id) {
   const data = await client.query(`SELECT * FROM "user" WHERE id=${id}`);

   return data.rows[0];
 },

 async getOneUserbyUsername(username) {
  const data = await client.query(`SELECT * FROM "user" WHERE "username"='${username}'`);
  const user = data.rows[0];
 }
}

module.exports = dataMapper;