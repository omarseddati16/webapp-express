const connection = require('../data/dataBase')


const index = (req, res) => {
  const sql = 'SELECT * FROM movies';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Errore nella query: " + err });
    }
    res.json(results);
  });
}

const show = (req, res) => {

  const id = req.params.id;

  const sql = 'SELECT * FROM movies WHERE id = ?';
  const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Errore della query: " + err });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Post non trovato" });
    }

    connection.query(sqlReviews, [id], (err, resultReviews) => {
      if (err) {
        return res.status(500).json({ error: "Errore della query: " + err });
      }

      const moviesWithReviews = {
        ...results[0],
        reviews: resultReviews
      }
      res.send(moviesWithReviews)
    });
  });
}

module.exports = {
  index,
  show,
}