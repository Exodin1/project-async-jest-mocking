// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const multiply = (a, b) => a * b;

const power = (a, b) => a ** b;

const factorial = (a) => {
  if (a < 0) return -1;
  if (a === 0) return 1;

  return (a * factorial(a - 1));
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

module.exports = { add, subtract, multiply, divide, power, factorial };
