function searchMenu() {
    let input = document.getElementById('searchInput').value.toLowerCase().split(' ');

    let menuItems = document.querySelectorAll('.bigmenu > div');

    let found = false;

    menuItems.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        let showItem = true;

        input.forEach(function(word) {
            if (!text.includes(word)) {
                showItem = false;
            }
        });

        if (showItem) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    let pTag = document.createElement('p');
    let message = found ? "": "Təəsüfki məhsul yoxdur";
    pTag.textContent = message;
    
    let existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    pTag.classList.add('message');
    document.body.appendChild(pTag);
}


