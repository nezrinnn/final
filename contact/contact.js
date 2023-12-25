document.addEventListener('DOMContentLoaded', function () {
    const form1 = document.querySelector('.form');
    const nameInput = document.querySelector('#name');
    const surnameInput = document.querySelector('#surname');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const messageInput = document.getElementById('message'); 
    const button = document.querySelector('button');

    button.addEventListener('click', function (event) {
        event.preventDefault();

        let isValid = true;

        if (!emailInput.value.includes('@gmail')) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.borderColor = '';
        }

        if (telInput.value.length !== 10 || !/^\d+$/.test(telInput.value)) {
            telInput.style.borderColor = 'red';
            isValid = false;
        } else {
            telInput.style.borderColor = '';
        }

        if (!messageInput.value.trim()) {
            messageInput.style.borderColor = 'red';
            isValid = false;
        } else {
            messageInput.style.borderColor = '';
        }

        
if (isValid) {
    alert('Mesajınız qeydə alınıb, tezliklə sizə geridönüş olunacaq.');
   
  }
});

});
