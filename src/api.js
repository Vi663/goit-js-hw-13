const BASE_URL = 'https://pixabay.com/api/';
export default class Cards {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  fetchAPI(q) {
    return fetch(`${BASE_URL}q`)
}
}
  