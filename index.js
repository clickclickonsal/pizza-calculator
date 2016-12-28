#! /usr/bin/env node

var prompt = require('prompt');
var colors = require("colors/safe");

prompt.message = colors.red("How many people RSVP'd for your event?");

prompt.get(['RSVPCount'], function (err, result) {
  if (err) return onErr(err);

  console.log(`You should order ${numberOfPizzasToOrder(result.RSVPCount)} pizza(s)`);
});

function numberOfPizzasToOrder (RSVPCount) {
  const NUMBER_OF_SLICES = 2;
  const ONE_PIZZA = 8;
  const NUMBER_OF_PIZZAS_TO_SUBTRACT = Math.floor(Math.random() * 2 + 2);

  return (RSVPCount * NUMBER_OF_SLICES/ONE_PIZZA) - NUMBER_OF_PIZZAS_TO_SUBTRACT;
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