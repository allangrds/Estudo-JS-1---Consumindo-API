var model = new Model();
var response = null;
model.setUrl("https://jsonplaceholder.typicode.com/users");
model.openXhr("GET");
for (var i = 1; i <= 2; ++i) {
    response = getResponse(i);
    if(response === null)
        i = 1;
}

function getResponse(i) {
  setTimeout(function() {
      console.log(model.getResponse());
      return model.getResponse();
  }, i * 5000);
}

