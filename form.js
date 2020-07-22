btnsend.addEventListener('click', function() {
    alert('');
    fetch('https://formspree.io/xdowyekb', {
        method: 'POST',
        body: JSON.stringify(
            {
                email: feedback.email.value,
                message: feedback.message.value
                }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log(response.status);
    });
})