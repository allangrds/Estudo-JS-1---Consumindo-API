var model = new Model();
var response = null;
model.setUrl("https://jsonplaceholder.typicode.com/users");
model.openXhr("GET");

getResponse();

function getResponse() {
    setTimeout(function() {
        response = model.getResponse();
        if(response) {
            renderResponse(response);
        }
        else {
            var myDiv = document.getElementById('requestFailed');
            myDiv.classList.remove("hidden");
        }
    }, 2000);
}

function renderResponse(response) {
    //var table = document.querySelectorAll('table > tbody');
    var tbody  = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    
    Object.keys(response).map(function(objectKey, index) {
        var value = response[objectKey];
        var name  = value.name;
        var email = value.email;
        var site  = value.website;
        
        var row = tbody.insertRow(0);
        var cellName = row.insertCell(0);
        var textName = document.createTextNode(name);
        cellName.appendChild(textName);
        
        var cellEmail = row.insertCell(0);
        var textEmail = document.createTextNode(email);
        cellEmail.appendChild(textEmail);
        
        var cellSite = row.insertCell(0);
        var textSite = document.createTextNode(site);
        cellSite.appendChild(textSite);
    });
}