const search_item_div = document.getElementsByClassName('search3')[0];
const search_item_active_div = document.getElementsByClassName('search3-active')[0];
const search_input = document.getElementsByName('search-query')[0];

function toggleModal() {
    if (search_item_active_div.style.display === 'block') {
        search_item_active_div.style.display = 'none';
        return;
    }

    search_item_active_div.style.display = 'block';
    // search_input.value = '';
}

search_item_div.addEventListener('click', function(e) { 
    toggleModal();
    e.stopPropagation();
});

document.addEventListener('click', function(event) {
    const isClickedInsideSearchItem = search_item_div.contains(event.target);
    const isClickedInsideSearchModal = search_item_active_div.contains(event.target);
    
    if (!isClickedInsideSearchItem && !isClickedInsideSearchModal) {
        search_item_active_div.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key !== 'Escape' || search_item_active_div.style.display !== 'block') return;

    search_item_active_div.style.display = 'none';
});