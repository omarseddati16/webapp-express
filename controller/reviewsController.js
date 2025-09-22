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

const showReviews = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM reviews WHERE movie_id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Errore della query: " + err });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Post non trovato" });
    }
    res.json(results);
  });
}

module.exports = {
  indexReviews,
  showReviews,
}