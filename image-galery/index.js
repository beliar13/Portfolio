/*query input*/
const queryText = document.getElementById('insert-query');
/*search button */
const searchButton = document.getElementById('find-clear');
/*set image container*/
const galleryContainer = document.getElementById('image-container');
/*query for api */
let queryForApi = "memes";
/*forming url */
const urlBegin = 'https://api.unsplash.com/search/photos?query='
const urlEnd = '&per_page=15&client_id=Rqj2EJ2QAotWRPt2eTpg9qHOGgkc5y-ljYMVwiD7gpw'

/*grab input from search bar when pressing Enter*/
queryText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        queryForApi = queryText.value
        url = urlBegin+queryForApi+urlEnd;
        mylastChild = galleryContainer.lastChild;
        clearImageContainer();
        getData();
        searchButton.classList.add('clear-query')
    }
})

/*grab input from searchbar when hit search button and change icon to close or lense*/
searchButton.addEventListener('click', () => {
    if (searchButton.classList.contains('clear-query')) {
        queryText.value ='';
        searchButton.classList.remove('clear-query');
    }
    else {
    queryForApi = queryText.value
    url = urlBegin+queryForApi+urlEnd;
    mylastChild = galleryContainer.lastChild;
    clearImageContainer();
    getData();
    searchButton.classList.add('clear-query')
}
})

/*fetch data from API and load images to image-container */
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
     showData(data);
  }

/*create img object to fill image-container */
const showData = (data) => {
    
    for (i=0;i < data.results.length; i++) {
        imgSrc = data.results[i].urls.regular
        const img = `<img class="gallery-image" src="${imgSrc}" alt="image">`;
        galleryContainer.insertAdjacentHTML('beforeend', img);
    }
}
/*change button icon to lense, when clearing input*/
queryText.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && queryText.value.length === 1) {
                searchButton.classList.remove('clear-query')
        }
})

/*clear image container */
const clearImageContainer = () => {
    while (mylastChild) {
        galleryContainer.removeChild(mylastChild);
        mylastChild = galleryContainer.lastChild;
    }
}