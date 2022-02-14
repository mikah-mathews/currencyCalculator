import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency.js';

function getElements(response, amount, currency) {
  if (response.result === "success") {
    let convertTo = response.conversion_rates[currency];
    let convertedAmount = Currency.currencyConversion(amount, convertTo);
    $('#chosenCurrency').text(`${convertedAmount}`);
  } else {
    $('.error').text(`There was an error: ${response}`);
  }
}

async function callCurrencyApi(amount, currency) {
  const response = await Currency.getCurrencyData();
  getElements(response, amount, currency);
}


$(document).ready( function() {
  $('#submit').on('click', function() {    
    event.preventDefault();
    let conversionAmount = $('#conversion-amount').val();
    let conversionCurrency = $("input:radio[name=currency]:checked").val();
    $('#usdAmount').text(`${conversionAmount}`);
    callCurrencyApi(conversionAmount, conversionCurrency);
  });
});