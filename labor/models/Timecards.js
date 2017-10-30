/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();


module.exports = function(sequelize, DataTypes) {
  var Timecards = sequelize.define("Timecards", {

    date: DataTypes.DATE,
    intime: DataTypes.DATE,
    outtime: DataTypes.DATE,

  });

  return Timecards;
};