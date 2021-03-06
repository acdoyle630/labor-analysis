/*jshint esversion: 6 */

const express = require('express');
const timecards = express.Router();
const db = require('../../models');
const { Timecards } = db;

timecards.post('/', ( req, res ) => {
  Timecards.create( req.body )
    .catch( err => {
      res.json( err );
    });
});

module.exports = timecards;