export default class Currency {
  static async getCurrency() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      if (!response.ok) {
        throw Error(response['error-type']);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}