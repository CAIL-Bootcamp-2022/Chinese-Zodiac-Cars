// Ajax for Cars Api
var wheelBtn = document.querySelector('#WheelButton')

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://car-data.p.rapidapi.com/cars/types",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "dc01b57ea1mshaa4f3952e2dd924p15fbecjsn41cb7f5ff069",
		"X-RapidAPI-Host": "car-data.p.rapidapi.com"
	}
};

function loadCarData() {
	//creat ajax object
	$.ajax({
		url: requestUrl,
		method: 'GET',
	  }).then(function (response) {
		console.log('Ajax Reponse \n-------------');
		console.log(response);
	  });
}

wheelBtn.addEventListener("click", loadCarData);


$.ajax(settings).done(function (response) {
	console.log(response);
});