
module.exports = function numberOfPizzasToOrder (RSVPCount) {
  const LIKELY_NUMBER_OF_PEOPLE_TO_SHOW_UP = Math.ceil(RSVPCount * 0.80);
  const NUMBER_OF_SLICES = 2;
  const TOTAL_NUMBER_OF_SLICES = NUMBER_OF_SLICES * LIKELY_NUMBER_OF_PEOPLE_TO_SHOW_UP;
  const ONE_PIZZA = 8;

  return TOTAL_NUMBER_OF_SLICES / ONE_PIZZA;
}
