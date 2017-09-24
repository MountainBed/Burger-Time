var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (colName, rowValue, cb) {
    orm.insertOne("burgers", colName, rowValue, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
