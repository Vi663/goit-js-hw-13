import './sass/main.scss';
import './api.js'
import Cards from './api.js'
import SimpleLightbox from "simplelightbox";
import Notiflix from "notiflix";
import Template from './partials/templates/cardMarkup.hbs'
import './sass/main.scss'
  
const cardsContainer = document.querySelector('.gallery');
const searchForm = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.style.display = 'none';
searchForm.addEventListener('submit', onSubmit);

const newCard = new Cards();
async function onSubmit(e) {
  e.preventDefault();
  loadMoreBtn.style.display = 'none';
  cardsContainer.innerHTML = "";
  const inputValue = e.currentTarget.elements.searchQuery.value;
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
  newCard.resetPage();
  renderMarkup();
}

function renderMarkup() {
  const inputValue = localStorage.getItem("inputValue");
  newCard.fetchCards(inputValue)
    .then((response) => {
      if (response.total > 0) {
        onSuccess(response);
      } else if (response.total === 0) {
        onFailure();
      }
    })
    // .catch((error) => console.error(error));
}

function onImageClick(e) {
  e.preventDefault();
  openLightBox();
};

function onLoadMore() {
  // openLightBox();
  // gallery.refresh();
  newCard.nextPage();
  renderMarkup();
};

function onSuccess(response) {
  const cardMarkup = Template(response);
  cardsContainer.insertAdjacentHTML("beforeend", cardMarkup);
  Notiflix.Notify.success(
    `Hooray! We found ${response.totalHits} images.`,
    {
      timeout: 3000,
    },
  );
  document.querySelector('.photo-card').addEventListener('click', onImageClick);
  loadMoreBtn.style.display = 'block';
  loadMoreBtn.addEventListener('click', onLoadMore);
}

function onFailure() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      timeout: 3000,
    },
  );
};

function openLightBox() {
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
	  // do something…
  });
}