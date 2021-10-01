const {
  calculatePrincipalAndInterest,
  calculateTaxRate,
  calculateinsuranceRate,
  calculateMontlyPayment,
  roundToTwo,
  prefixCurrency,
} = require('./utils');

test('should calculate Principal and Interest', () => {
  const result = calculatePrincipalAndInterest('10', '100000', 40);
  expect(result).toBe(849.1459110721892);
});

test('should calculate Tax Rate', () => {
  const result = calculateTaxRate('4000');
  expect(result).toBe(333.3333333333333);
});

test('should calculate insurance Rate', () => {
  const result = calculateinsuranceRate('2500');
  expect(result).toBe(208.33333333333334);
});

test('should calculate Total Montly Payment', () => {
  const result = calculateMontlyPayment(849.15, 333.33, 208.33);
  expect(result).toBe(1390.81);
});

test('should add $ currency to amount', () => {
  const result = prefixCurrency(849.15);
  expect(result).toBe('$ 849.15');
});

test('should round excess decimals', () => {
  const result = roundToTwo(849.15532123);
  expect(result).toBe(849.16);
});