const form = document.getElementsByTagName('form')[0]
const emailInput = document.getElementById('exampleInputEmail1')
const passInput = document.getElementById('exampleInputPassword1')

form.addEventListener('submit', handleSubmit)

async function handleSubmit(e){
    e.preventDefault()
    console.log(emailInput.value)
    console.log(passInput.value)

    const userCred = {
        email: emailInput.value,
        password: passInput.value
    }

    // const request = await fetch('/signIn', { 
    //     method: 'POST', 
    //     body: JSON.stringify(userCred), 
    //     headers: { 'Content-type': 'application/json; charset=UTF-8'} 
    // })
    // axios.post('/signIn', userCred)
    // console.log(request)

    const req = await axios.post('/signUp', userCred)

    console.log(req.data)
}