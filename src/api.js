const BASE_URL = 'https://pixabay.com/api/';
export default class Cards {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  fetchAPI(q) {
    const options = {
      key: '22593683-900dbddd4b86d221bedd65f3e',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
    }
    return fetch(`${BASE_URL}?
    key=${options.key}&
    q=${q}&
    image_type=${options.image_type}&
    orientation=${options.orientation}&
    safesearch=${options.safesearch}`)
    .then
}
}
  