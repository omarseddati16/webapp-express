const connection = require('../data/dataBase')

const indexReviews = (req, res) => {
  const sql = 'SELECT * FROM reviews';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Errore nella query: " + err });
    }
    res.json(results);
  });
}

module.exports = {
  indexReviews
}