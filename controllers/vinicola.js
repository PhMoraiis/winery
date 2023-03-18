import { db } from '../db.js';

const getVinicolas = (req, res) => {
  const q = "SELECT * FROM vinicolas";

  db.query(q, (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
};

export { getVinicolas };