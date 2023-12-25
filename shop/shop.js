document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll('.add'); 

    addButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const quantityInput = button.parentElement.querySelector('.product-quantity'); 
            const quantity = parseInt(quantityInput.value); 

            if (quantity > 0) {
                alert('Məhsulunuz səbətə əlavə olundu.'); 
                quantityInput.value = 0; 
            }
        });
    });

    const quantityInputs = document.querySelectorAll('.product-quantity'); 

    quantityInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            const value = parseInt(input.value); 

            if (value < 0) {
                input.value = 0; 
            }
        });
    });
});
