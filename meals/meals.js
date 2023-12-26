function filterByPrice() {
    let minPrice = parseFloat(document.getElementById('minPrice').value);
    let maxPrice = parseFloat(document.getElementById('maxPrice').value);

    let salads = document.querySelectorAll('.first');

    salads.forEach(function(salad) {
        let price = parseFloat(salad.querySelector('p').innerText.split(' ')[0]); 

        if (price < minPrice || price > maxPrice) {
            salad.style.display = 'none';
        } else {
            salad.style.display = 'block';
        }
    });
}


