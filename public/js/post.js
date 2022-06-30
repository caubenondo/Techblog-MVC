const newPostHandler = async (event) =>{
    event.preventDefault();

    const name = document.querySelector('#post_name').value.trim()
    const description = document.querySelector('#post_description').value.trim()

    if(name && description){
        const response = await fetch('/api/posts',{
            method: 'POST',
            body: JSON.stringify({name, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to create project')
        }
    }
}






document.querySelector('#add-post').addEventListener('submit',newPostHandler);