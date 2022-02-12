import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency.js';

function getElements(response, amount, currency) {
  if (response.result === "success") {
    let convertTo = response.conversion_rates[currency];
    return Currency.currencyConversion(amount, convertTo);
  } else {
    $('.error').text(`There was an error: ${response}`);
  }
}

async function callCurrencyApi(amount, currency) {
  const response = await Currency.getCurrencyData();
  getElements(response, amount, currency);
}


$(function() {
  $('#submit').on('click', function() {
    let conversionAmount = $('#conversion-amount').val();
    let conversionCurrency = $("input:radio[name=currency]:checked").val();
    let convertedAmount = (conversionAmount, conversionCurrency);
    alert(`${conversionAmount} USD is equal to ${convertedAmount} ${conversionCurrency.attr('id')}`)
  });
});