const getUser = () => {
    const xhr = XMLHttpRequest();

    xhr.addEventListener('readSstate',() => {
        if(xhr.readyState === 4 
            && xhr.status === 200) {
                console.log(xhr.responseText)
                const response = JSON.parse(xhr.response.Text);
            }else{
                console.log('Hubo un error')
            }
        console.log(xhr)
    })
    
    const url = 'https://xjsonplaceholder.typicode.com/users'
    xhr.open('GET',url, true)
    xhr.send()
    
}

const renderUSers = (users) => {
    users.forEach(user => {
        console.log(user) 
    });
}


// GET

