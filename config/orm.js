var connection = require("./connection.js");

function printQuestionMarks (num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

function objToSql (ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
};

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function (err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function (tableName, colName, colValue, cb) {
    var queryString = "INSERT INTO " + tableName;

    queryString += " (";
    queryString += colName.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(colValue.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, colValue, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
