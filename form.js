document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Encode the data to ensure it's URL-safe
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);

    // Construct the mailto link
    const mailtoLink = `mailto:jahfarbinmuhammed117@gmail.com?subject=Contact Form Submission&body=Name: ${encodedName}%0AEmail: ${encodedEmail}%0AMessage: ${encodedMessage}`;

    // Open the mailto link to draft an email
    window.location.href = mailtoLink;

    // Optionally, clear the form after submission
    document.getElementById("contactForm").reset();
});
