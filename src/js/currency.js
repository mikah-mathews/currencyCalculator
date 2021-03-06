export default class Currency {
  static async getCurrencyData() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }

  static currencyConversion(usd, currency) {
    let conversionRate = usd*currency;
    return conversionRate; 
  }
}