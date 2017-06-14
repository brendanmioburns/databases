var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var queryString = 'SELECT * FROM messages';

      db.query(queryString, function(err, results) {
        cb(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      var queryString = 'INSERT into users(username) values (?)';
      db.query(queryString, function(err, results) {
        cb(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        cb(err, results);
      });
    },
    post: function (params, cb) {
      var queryStr = 'insert into users(username) values(?)';
      db.query(queryStr, params, function(err, results) {
        cb(err, results);
      });
    }
  }
};

