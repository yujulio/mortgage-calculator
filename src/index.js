import './styles.scss';

const {
  calculatePrincipleAndInterest,
  calculateTaxRate,
  calculateinsuranceRate,
  calculateMontlyPayment,
  prefixCurrency,
  roundToTwo,
} = require('./utils');

const mortageInput = document.querySelector('[data-js=mortage-input]');
const interestInput = document.querySelector('[data-js=interest-input]');
const mortageRange = document.querySelector('[data-js=mortage-range]');
const interestRange = document.querySelector('[data-js=interest-range]');
const loan = document.querySelector('[data-js=loan]');
const tax = document.querySelector('[data-js=tax]');
const insurance = document.querySelector('[data-js=insurance]');
const calculate = document.querySelector('[data-js=calculate]');
const interestResult = document.querySelector('[data-js=principal-interest-result]');
const taxResult = document.querySelector('[data-js=tax-result]');
const insuranceResult = document.querySelector('[data-js=insurance-result]');
const totalMontlyPayment = document.querySelector('[data-js=total-montly-payment]');
const calculatorResults = document.querySelector('.calculator-results');
const results = calculatorResults.querySelectorAll('.calculator-results p');

function cleanForm() {
  results.forEach((result) => {
    const item = result;
    item.innerHTML = '$ --';
  });

  const inputsAndResults = document.querySelectorAll(
    '.input-container small, .input-container input, .calculator-results p, .calculator-results',
  );
  inputsAndResults.forEach((item) => item.classList.remove('show', 'error', 'active'));
}

function showResults(principleAndInterest, taxRate, insuranceRate, montlyPayment) {
  interestResult.innerText = prefixCurrency(roundToTwo(principleAndInterest));
  taxResult.innerText = prefixCurrency(roundToTwo(taxRate));
  insuranceResult.innerText = prefixCurrency(roundToTwo(insuranceRate));
  totalMontlyPayment.innerText = prefixCurrency(roundToTwo(montlyPayment));

  results.forEach((result) => result.classList.add('active'));
  calculatorResults.classList.add('show');
}

function checkInputs() {
  const loanValue = loan.value;
  const taxValue = tax.value;
  const insuranceValue = insurance.value;

  if (!loanValue) {
    loan.parentElement.querySelector('small').classList.add('show');
    loan.classList.add('error');
  }

  if (!taxValue) {
    tax.parentElement.querySelector('small').classList.add('show');
    tax.classList.add('error');
  }

  if (!insuranceValue) {
    insurance.parentElement.querySelector('small').classList.add('show');
    insurance.classList.add('error');
  }

  return loanValue && taxValue && insuranceValue;
}

function calculateRate() {
  cleanForm();

  if (!checkInputs()) return false;

  const principleAndInterest = calculatePrincipleAndInterest(
    interestInput.value, loan.value, mortageInput.value,
  );
  const taxRate = calculateTaxRate(tax.value);
  const insuranceRate = calculateinsuranceRate(insurance.value);
  const montlyPayment = calculateMontlyPayment(principleAndInterest, taxRate, insuranceRate);

  return showResults(principleAndInterest, taxRate, insuranceRate, montlyPayment);
}

calculate.addEventListener('click', (e) => {
  e.preventDefault();
  calculateRate();
});

mortageRange.addEventListener('input', (e) => {
  mortageInput.value = e.target.value;
});
mortageInput.addEventListener('input', (e) => {
  mortageRange.value = e.target.value;
});

interestRange.addEventListener('input', (e) => {
  interestInput.value = e.target.value;
});
interestInput.addEventListener('input', (e) => {
  interestRange.value = e.target.value;
});
