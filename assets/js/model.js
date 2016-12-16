var Model = function() {
    var _url = null;
    var _xhr = new XMLHttpRequest();
    var _message = {};
    var _response = null;
    
    this.setUrl = function (url) {
        _url = url;
    }

    this.getUrl = function (url) {
        return _url;
    }

    this.openXhr = function(method) {
        _xhr.open(method, this.getUrl());
        _xhr.onload = this.onLoadXhr.bind(this);;
        _xhr.send();
    }

    this.onLoadXhr = function() {
        if (_xhr.status === 200)
            _message.status = "success";
        else
            _message.status = "failed";
        
        var response = this.parseResponse(_xhr.responseText);
        
        this.setResponse(response);
    }

    this.parseResponse = function(response) {
        return JSON.parse(response);
    }

    this.setResponse = function(response) {
        _response = response;
    }

    this.getResponse = function() {
        return _response;
    }


}