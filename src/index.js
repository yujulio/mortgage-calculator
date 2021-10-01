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

function cleanResult() {
  interestResult.innerHTML = '$ --';
  taxResult.innerHTML = '$ --';
  insuranceResult.innerHTML = '$ --';
  totalMontlyPayment.innerHTML = '$ --';

  interestResult.classList.remove('active');
  taxResult.classList.remove('active');
  insuranceResult.classList.remove('active');
  totalMontlyPayment.classList.remove('active');
  document.querySelector('.calculator-results').classList.remove('show');
}

function showResults(principleAndInterest, taxRate, insuranceRate, montlyPayment) {
  interestResult.innerText = prefixCurrency(roundToTwo(principleAndInterest));
  taxResult.innerText = prefixCurrency(roundToTwo(taxRate));
  insuranceResult.innerText = prefixCurrency(roundToTwo(insuranceRate));
  totalMontlyPayment.innerText = prefixCurrency(roundToTwo(montlyPayment));

  interestResult.classList.add('active');
  taxResult.classList.add('active');
  insuranceResult.classList.add('active');
  totalMontlyPayment.classList.add('active');
  document.querySelector('.calculator-results').classList.add('show');
}

function checkInputs() {
  const loanValue = loan.value;
  const taxValue = tax.value;
  const insuranceValue = insurance.value;

  if (!loanValue) {
    loan.parentElement.querySelector('small').innerText = 'Mandatory field';
    loan.classList.add('error');
  } else {
    loan.parentElement.querySelector('small').innerText = '';
    loan.classList.remove('error');
  }

  if (!taxValue) {
    tax.parentElement.querySelector('small').innerText = 'Mandatory field';
    tax.classList.add('error');
  } else {
    tax.parentElement.querySelector('small').innerText = '';
    tax.classList.remove('error');
  }

  if (!insuranceValue) {
    insurance.parentElement.querySelector('small').innerText = 'Mandatory field';
    insurance.classList.add('error');
  } else {
    insurance.parentElement.querySelector('small').innerText = '';
    insurance.classList.remove('error');
  }

  return loanValue && taxValue && insuranceValue;
}

function calculateRate() {
  cleanResult();

  if (!checkInputs()) {
    return false;
  }

  const principleAndInterest = calculatePrincipleAndInterest(
    interestInput.value, loan.value, mortageInput.value,
  );
  const taxRate = calculateTaxRate(tax.value);
  const insuranceRate = calculateinsuranceRate(insurance.value);
  const montlyPayment = calculateMontlyPayment(principleAndInterest, taxRate, insuranceRate);

  showResults(principleAndInterest, taxRate, insuranceRate, montlyPayment);

  return roundToTwo(totalMontlyPayment);
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
