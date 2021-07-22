import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
export default class Cards {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  fetchCards = async (q) => {
    const options = {
      key: '22593683-900dbddd4b86d221bedd65f3e',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
    }
    const response = await axios.get(`${BASE_URL}?key=${options.key}&q=${q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&per_page=40&page=${this.page}`);
    return response.data;
  }
  nextPage() {
    this.page += 1;
    console.log(this.page);
  }
  resetPage() {
    this.page = 1;
  }
  clearSearchForm() {
    this.searchQuery = '';
  }
}
  