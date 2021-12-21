//3)Use the same rest countries and print all countries name, region, sub region and population

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    //console.log(x);
    for (key in x) {
      console.log(
        `countrys name is ${x[key].name}, present in the region ${x[key].region}, in the subregion ${x[key].subregion}, with population of ${x[key].population}`
      );
      console.log("------------------------------------------------");
    }
  } else {
    console.log(this.responseText);
  }
};

//create and send some request to api:
//get, post, put delete funtions
newRequest.open("GET", "https://restcountries.eu/rest/v2/all");
newRequest.send();
