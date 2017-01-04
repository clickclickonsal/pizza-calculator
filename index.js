#! /usr/bin/env node

var prompt = require('prompt');
var colors = require("colors/safe");
var pizzaCalculator = require('./pizza-calculator');

prompt.message = colors.red("How many people RSVP'd for your event?");

prompt.get(['RSVPCount'], function (err, result) {
  if (err) return onErr(err);

  console.log(`You should order ${pizzaCalculator(result.RSVPCount)} pizza(s)`);
});

function onErr(err) {
  console.log(err);
  process.exit();
}

prompt.start();

// @todo:
// 2 Veggie
// 2 Cheese
// 2 Zappatore
// 2 Pepperoni
// 1 Bacon
// 2 Chicken
// 1 Veggie without Cheese
