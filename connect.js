document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            // Here, you can submit the form using AJAX or any other method
            alert('Form submitted successfully!');
            form.reset(); // Reset the form after successful submission
        }
    });
});
