const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 18;

const isSenior = (age) => age >= 64;

export {
  isAdult,
  canDrink,
  isSenior as default
};
