/*muy module handle - start */
const CLOSE_BUY = document.getElementById('close-buy');
const BUY_WINDOW = document.getElementById('buy-module');


CLOSE_BUY.addEventListener('click', () => {
   document.getElementById('overlay-buy').classList.add('overlay-hidden');
})

document.addEventListener('mouseup', function(e) {
    if (!BUY_WINDOW.contains(e.target)) {
        document.getElementById('overlay-buy').classList.add('overlay-hidden');
    }
});
/*muy module handle - start */