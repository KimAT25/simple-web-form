(function () {
    function addClickListener() {
        document.querySelector('.submit-button').addEventListener('click', (event) => {
            event.preventDefault();
            const data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                description: document.getElementById('descrp').value
            }
            console.log(data);
            sendEmailForm(data);
        })
    }

    function sendEmailForm(formData) {
        const form = document.getElementById('form');
        fetch('send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                console.log(response);
                form.reset()
            })
            .catch(error => console.log(error));
    }

    addClickListener();
})();
