//2)Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    //console.log(x);
    for (key in x) {
      let k = x[key].flag;
      console.log(k);
      //   console.image(k[100]);
      //   console.log("%c ", "font-size:300px; background:url(k)");
    }
  } else {
    console.log(this.responseText);
  }
};

//create and send some request to api:
//get, post, put delete funtions
newRequest.open("GET", "https://restcountries.eu/rest/v2/all");
newRequest.send();

