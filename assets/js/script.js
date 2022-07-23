// var SubmitBtn = document.getElementById("Submit")
var wheelBtn = document.querySelector("#wheel-btn");
var carSearchYear = document.querySelector("#birthyear");
var userList = document.getElementById ("userList");
var carList = document.getElementById ("carList");
var firstName = document.getElementById("fname");
var birthYear = document.getElementById("birthyear");


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
	$.ajax(settings).then(function (response) {
		console.log('Ajax Reponse \n-------------');
		console.log(response);
	  });
}

wheelBtn.addEventListener("click", loadCarData);

loadCarData()

function loadImage() {
	const settings = {
	  async: true,
	  crossDomain: true,
	  url: `https://api.pexels.com/v1/search?query=nature`,
	  method: "GET",
	  headers: {
		Authorization: "563492ad6f9170000100000125fc35443ac14f708d6dc9b7b281a2fd",
	  },
	};
	$.ajax(settings).then(function (response) {
	  console.log("response", response);
	});
  }

//   Add user list
  function addNewUser () {
	var newUserDiv = document.createElement("div");
	newUserDiv.classList.add('Div-usersList');
	userList.appendChild(newUserDiv);
	
  }

//   Add cars list
function addNewCar() {
	var newCarDiv = document.createElement("div");
	newCarDiv.classList.add('Div-carList');
	carList.appendChild(newCarDiv);
}


loadCarData()
loadImage()
addNewUser ()
addNewCar()
