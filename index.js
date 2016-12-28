#! /usr/bin/env node

var prompt = require('prompt');
var colors = require("colors/safe");

prompt.message = colors.red("How many people RSVP'd for your event?");

prompt.get(['RSVPCount'], function (err, result) {
  if (err) return onErr(err);

  console.log(`You should order ${numberOfPizzasToOrder(result.RSVPCount)} pizza(s)`);
});

function numberOfPizzasToOrder (RSVPCount) {
  const LIKELY_NUMBER_OF_PEOPLE_TO_SHOW_UP = Math.ceil(RSVPCount * 0.80);
  const NUMBER_OF_SLICES = 2;
  const TOTAL_NUMBER_OF_SLICES = NUMBER_OF_SLICES * LIKELY_NUMBER_OF_PEOPLE_TO_SHOW_UP;
  const ONE_PIZZA = 8;

  return TOTAL_NUMBER_OF_SLICES / ONE_PIZZA;
}

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