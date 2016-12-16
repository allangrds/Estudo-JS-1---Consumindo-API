var model = new Model();
var response = null;
model.setUrl("https://jsonplaceholder.typicode.com/users");
model.openXhr("GET");

getResponse();

function getResponse() {
    for(var i = 1; i <= 5; ++i) {
        setTimeout(function() {
            response = model.getResponse();
            if(response) {
                renderResponse(response);
                return false;
            }
        }, i * 2000);
    }
    if(!response) {
        var myDiv = document.getElementsByClassName('alert-warning');
        myDiv.innerHTML = "Hmmm...não conseguimos encontrar resultados para sua requisição :(";
    }
}

function renderResponse(response) {
    var table = document.querySelectorAll('table > tbody');
    Object.keys(response).map(function(objectKey, index) {
        var value = response[objectKey];
        console.log(value);
        
        var row = document.createElement('tr');
        var col = document.createElement('td');
    });
}