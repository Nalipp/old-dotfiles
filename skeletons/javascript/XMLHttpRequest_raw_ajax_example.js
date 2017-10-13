var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
  if (XHR.readyState === 4) {
    if (XHR.status === 200) alert(XHR.responseText); 
    else alert('there was an error with the api request')
  }
}

XHR.open("GET","https://api.github.com/zen2");
XHR.send();
