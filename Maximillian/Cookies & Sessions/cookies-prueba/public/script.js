let photosToDelete = document.querySelectorAll('.delete')



photosToDelete.forEach(photo => {
        photo.addEventListener('click', deleteImage)
    });



    function deleteImage(e) {

        let url = '/gallery/delete';

        e.path[1].style.display = "none"
        let data = { id: e.path[1].dataset[""] };
        
        fetch(url, {
            method: 'DELETE', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    
