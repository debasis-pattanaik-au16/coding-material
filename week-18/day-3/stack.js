var App = (function(){

    var inputElement = document.getElementById('userInput')
    var pushBtn = document.getElementById('pushBtn')
    var popBtn = document.getElementById('popBtn')
    var stackContainer = document.getElementById('stack')

    var stackArray = []

    function pushToStack(){
        var inputValue = inputElement.value
        stackArray.push(inputValue)
        updateStackContainer()
    }

    function popFromStack(){
        stackArray.pop()
        updateStackContainer()
    }

    function updateStackContainer(){
        var spanElements = stackArray.map(function(item){
            return '<span>' + item + '</span>'    
            // return document.createElement('span')
        })
        console.log(spanElements);
        stackContainer.innerHTML = spanElements
    }

    pushBtn.addEventListener('click', pushToStack)
    popBtn.addEventListener('click', popFromStack)

    return "Popat Hogaya"
})()