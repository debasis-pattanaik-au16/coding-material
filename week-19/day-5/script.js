const responsePromise = fetch('https://jsonplaceholder.typicode.com/todos');


console.log(responsePromise)

function successfulFetch(response){


    console.log('Fetched Successful')
    const jsonPromise = response.json()
    
    jsonPromise.then(function(data){
       const paragraphs = data.map(todoItem => `<li>${todoItem.title}</li>`)

       document.body.innerHTML = `<ul>${paragraphs.join('')}</ul>`
    })

}

responsePromise.then(successfulFetch)



// responsePromise.catch(function(){
//     console.log('ERROR')
// })
// console.log('Getting the data')

const getDataBtn = document.getElementById('getData')
getDataBtn.addEventListener('click', handleBtnClick)

function handleBtnClick(){
    getDataFromServer()
}

async function getDataFromServer(){
    try {
        
        const responseObj = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.log(responseObj)

        const jsonData = await responseObj.json()
        console.log(jsonData)

        const paragraphs = jsonData.map(todoItem => `<li>${todoItem.title}</li>`).join('')
        document.getElementById('todoItems').innerHTML = `<ul>${paragraphs}</ul>`
        
    } catch (error) {
        document.getElementById('todoItems').innerHTML = 'Error Occurred'
    }
}