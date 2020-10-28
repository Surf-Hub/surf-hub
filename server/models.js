const { Pool } = require('pg');

const uri =
  'postgres://ndejgdfx:aGzGvreGG4EUsYjjL29YvB0lJZg5IFss@lallah.db.elephantsql.com:5432/ndejgdfx';

const pool = new Pool({ connectionString: uri });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
