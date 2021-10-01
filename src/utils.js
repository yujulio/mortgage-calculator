exports.calculatePrincipalAndInterest = (i, l, y) => {
  const interestRate = parseFloat(i);
  const loanAmount = parseFloat(l);
  const yearsOfMortage = parseFloat(y);

  const principle = ((interestRate / 100 / 12) * loanAmount)
    / (1 - ((1 + interestRate / 100 / 12) ** (-yearsOfMortage * 12)));

  return principle;
};

exports.calculateTaxRate = (value) => parseFloat(value) / 12;

exports.calculateinsuranceRate = (value) => parseFloat(value) / 12;

exports.calculateMontlyPayment = (
  principleAndInterest, taxRate, insuranceRate,
) => principleAndInterest + taxRate + insuranceRate;

exports.roundToTwo = (num) => +(`${Math.round(`${num}e+2`)}e-2`);

exports.prefixCurrency = (number) => `$ ${number}`;
