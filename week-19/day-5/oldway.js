// old way of handling/creating ajax request

const url = 'https://jsonplaceholder.typicode.com/todos'

const request = new XMLHttpRequest();

//Open a connection to a URL
request.open('get', url)

// receive data on success and do something with it
request.onreadystatechange = (data) => {

    if (request.readyState == 4 && request.status == 200) {
        
        const jsonData = JSON.parse(request.responseText)

        console.log(jsonData)

    }

}

//send the request to the server
request.send()

