import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './js/currency.js';

function getElements(response) {
  if (response) {
 
  } else {

  }
}

async function callCurrencyApi() {
  const response = await Currency.getCurrencyData();

}


$(function() {
  $('#submit').on('click', function() {
    let conversionAmount = $('#conversion-amount').val();
    let conversionCurrency = $("input:radio[name=currency]:checked").val();
    alert(`This is the conversion amount ${conversionAmount} and this is the currency selected ${conversionCurrency}`);
  });
});