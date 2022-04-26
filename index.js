let emailElement = document.querySelector('#email');
let submitButton = document.querySelector('#submit-button');
let messageElement = document.querySelector('#message');



submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if (emailValue.includes('@')) {
        //all good
        alert('Thank yoy for your message')
    }
    else {
        alert('Oh No, That does not look like a valid email address, Please try again.');
    }

})
