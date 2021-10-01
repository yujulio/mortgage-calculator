/**
 * Calculate the Principle and Interest
 * @param {string|number} i Interest rate
 * @param {string|number} l Total loan
 * @param {string|number} y Years of Mortage
 * @returns The calculated Principle and Interest
 */
exports.calculatePrincipleAndInterest = (i, l, y) => {
  const interestRate = parseFloat(i);
  const loanAmount = parseFloat(l);
  const yearsOfMortage = parseFloat(y);

  const principle = ((interestRate / 100 / 12) * loanAmount)
    / (1 - ((1 + interestRate / 100 / 12) ** (-yearsOfMortage * 12)));

  return principle;
};

/**
 * Calculate the montly tax rate
 * @param {string|number} value Annual tax
 * @returns The calculated montly tax rate
 */
exports.calculateTaxRate = (value) => parseFloat(value) / 12;

/**
 * Calculate the montly insurance rate
 * @param {string|number} value Annual insurance
 * @returns The calculated montly insurance rate
 */
exports.calculateinsuranceRate = (value) => parseFloat(value) / 12;

/**
 * Calculate the total montly payment
 * @param {string|number} principleAndInterest The total principal and interest
 * @param {string|number} taxRate The tax rate
 * @param {string|number} insuranceRate The insurance rate
 * @returns The montly payment
 */
exports.calculateMontlyPayment = (
  principleAndInterest, taxRate, insuranceRate,
) => principleAndInterest + taxRate + insuranceRate;

/**
 * Rounds excess decimals to two digits maximum
 * @param {number} num The amount that needs to be rounded
 * @returns The rounded amount
 */
exports.roundToTwo = (num) => +(`${Math.round(`${num}e+2`)}e-2`);

/**
 * Adds the currency to the amount
 * @param {number} number Amount
 * @returns The amount with the currency prefix
 */
exports.prefixCurrency = (number) => `$ ${number}`;
