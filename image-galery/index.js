/*query input*/
const queryText = document.getElementById('insert-query');
/*search button */
const searchButton = document.getElementById('find-clear');
/*query for api */
let queryForApi = "";

/*grab input from search bar when pressing Enter*/
queryText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        queryForApi = queryText.value
    }
})

/*grab input from searchbar when hit search button */
searchButton.addEventListener('click', () => {
    queryForApi = queryText.value
})