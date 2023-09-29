/*query input*/
const queryText = document.getElementById('insert-query');
/*search button */
const searchButton = document.getElementById('find-clear');
/*set image container*/
const galleryContainer = document.getElementById('image-container');
/*query for api */
let queryForApi = "";
/*forming url */
const urlBegin = 'https://api.unsplash.com/search/photos?query='
const urlEnd = '&client_id=Rqj2EJ2QAotWRPt2eTpg9qHOGgkc5y-ljYMVwiD7gpw'

/*grab input from search bar when pressing Enter*/
queryText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        queryForApi = queryText.value
        url = urlBegin+queryForApi+urlEnd;
        getData();
    }
})

/*grab input from searchbar when hit search button */
searchButton.addEventListener('click', () => {
    queryForApi = queryText.value
    url = urlBegin+queryForApi+urlEnd;
    getData();
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

queryText.addEventListener('onchange', () => {
    searchButton.classList.add()
})