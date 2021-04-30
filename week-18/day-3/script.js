var getLcnBtn = document.getElementById('getLocationBtn')

function onPositionReceived(position) {
    console.log("Position Received")
    console.log(position)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
}

function onPositionDenied(){
    console.log("Denied!!!!!!!!!")
}

function getUserLocation(event){

    console.log("Trying to get the user's position")
    navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionDenied)

    //navigator.geolocation.watchPosition() 
}

getLcnBtn.addEventListener('click', getUserLocation)