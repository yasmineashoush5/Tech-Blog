const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#application-name').value.trim();

    if (name & description) {
        const response = await fetch(`/api/application`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

    };

    const delButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');

            const response = await fetch(`/api/application/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to delete application');
            }
        }
    };

    document
        .querySelector('.new-project-form')
        .addEventListener('submit', newFormHandler);

    document
        .querySelector('.project-list')
        .addEventListener('click', delButtonHandler);