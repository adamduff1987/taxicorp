var taxiDrivers = document.getElementById("taxiDrivers");

fetch('people.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

for (var i = 0; i < data.length; i++) {
 var div = document.createElement("div");
	div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
	taxiDrivers.appendChild(div);
}