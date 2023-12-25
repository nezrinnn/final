document.addEventListener('DOMContentLoaded', () => {
    const reservationButton = document.getElementById('reservationButton');
    const changeButton = document.querySelector('.button');
    const toCartButton = document.querySelector('.tocart');
    const listContainer = document.getElementById('list-container');
    const inputs = document.querySelectorAll('input[required], select');


    toCartButton.style.pointerEvents = 'none';
    toCartButton.style.opacity = '0.5';

    reservationButton.addEventListener('click', () => {
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (valid) {
            const count = document.querySelector('.selec').value;
            const date = document.querySelector('input[type="date"]').value;
            const time = document.querySelector('input[type="time"]').value;
            const name = document.getElementById('name').value.trim();
            const surname = document.getElementById('surname').value.trim();
            const email = document.getElementById('email').value;
            const tel = document.getElementById('tel').value;

            if (!count || !date || !time || !name || !surname || !email || !tel || tel.length !== 10 || /\s/.test(name) || /\s/.test(surname)) {
                alert('Zəhmət olmasa bütün məlumatları düzgün daxil edin.');
            } else {
                const reservationDetails = `
                    <li>
                        <strong>Nəfər sayı:</strong> ${count}<br>
                        <strong>Tarix:</strong> ${date}<br>
                        <strong>Saat:</strong> ${time}<br>
                        <strong>Ad:</strong> ${name}<br>
                        <strong>Soyad:</strong> ${surname}<br>
                        <strong>Email:</strong> ${email}<br>
                        <strong>Tel:</strong> ${tel}<br>
                    </li>
                `;

                listContainer.innerHTML += reservationDetails;

                inputs.forEach(input => {
                    input.value = '';
                });


                if (listContainer.children.length === 0) {
                    toCartButton.style.pointerEvents = 'none';
                    toCartButton.style.opacity = '0.5';
                } else {
                    toCartButton.style.pointerEvents = 'auto';
                    toCartButton.style.opacity = '1';
                }
            }
        }
    });


    changeButton.addEventListener('click', () => {
        listContainer.innerHTML = '';


        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '';
        });


        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        toCartButton.style.pointerEvents = 'none';
        toCartButton.style.opacity = '0.5';
    });
});
