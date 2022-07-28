// var SubmitBtn = document.getElementById("black")
var wheelBtn = document.getElementById("wheel-btn");
var userList = document.getElementById("userList");
var carList = document.getElementById("carList");
var userName = document.getElementById("fname");
var userBirthYear = document.getElementById("birthyear");
var userZodiac;
var userYears;
var chosenYear;
var carData;
var carImage;
var userCar;

const userData = {
  name: [],
  birthYear: [],
  zodiac: [],
  car: [],
};

var storedUserData;

const zodiacYears = {
  rat: [1960, 1972, 1984, 1996, 2008, 2020],
  ox: [1961, 1973, 1985, 1997, 2009, 2021],
  tiger: [1962, 1974, 1986, 1998, 2010, 2022],
  rabbit: [1963, 1975, 1987, 1999, 2011],
  dragon: [1964, 1976, 1988, 2000, 2012],
  snake: [1965, 1977, 1989, 2001, 2013],
  horse: [1966, 1978, 1990, 2002, 2014],
  goat: [1967, 1979, 1991, 2003, 2015],
  monkey: [1968, 1980, 1992, 2004, 2016],
  rooster: [1969, 1981, 1993, 2005, 2017],
  dog: [1970, 1982, 1994, 2006, 2018],
  pig: [1971, 1983, 1995, 2007, 2019],
};

// Checks user entered birth year against all zodiac arrays and assigns zodiac on matching value
function getUserZodiac() {
  for (var i = 0; i < zodiacYears.rat.length; i++) {
    if (userBirthYear.value == zodiacYears.rat[i]) {
      userZodiac = "rat";
      userYears = zodiacYears.rat;
    }
  }
  for (var i = 0; i < zodiacYears.ox.length; i++) {
    if (userBirthYear.value == zodiacYears.ox[i]) {
      userZodiac = "ox";
      userYears = zodiacYears.ox;
    }
  }
  for (var i = 0; i < zodiacYears.tiger.length; i++) {
    if (userBirthYear.value == zodiacYears.tiger[i]) {
      userZodiac = "tiger";
      userYears = zodiacYears.tiger;
    }
  }
  for (var i = 0; i < zodiacYears.rabbit.length; i++) {
    if (userBirthYear.value == zodiacYears.rabbit[i]) {
      userZodiac = "rabbit";
      userYears = zodiacYears.rabbit;
    }
  }
  for (var i = 0; i < zodiacYears.dragon.length; i++) {
    if (userBirthYear.value == zodiacYears.dragon[i]) {
      userZodiac = "dragon";
      userYears = zodiacYears.dragon;
    }
  }
  for (var i = 0; i < zodiacYears.snake.length; i++) {
    if (userBirthYear.value == zodiacYears.snake[i]) {
      userZodiac = "snake";
      userYears = zodiacYears.snake;
    }
  }
  for (var i = 0; i < zodiacYears.horse.length; i++) {
    if (userBirthYear.value == zodiacYears.horse[i]) {
      userZodiac = "horse";
      userYears = zodiacYears.horse;
    }
  }
  for (var i = 0; i < zodiacYears.goat.length; i++) {
    if (userBirthYear.value == zodiacYears.goat[i]) {
      userZodiac = "goat";
      userYears = zodiacYears.goat;
    }
  }
  for (var i = 0; i < zodiacYears.monkey.length; i++) {
    if (userBirthYear.value == zodiacYears.monkey[i]) {
      userZodiac = "monkey";
      userYears = zodiacYears.monkey;
    }
  }
  for (var i = 0; i < zodiacYears.rooster.length; i++) {
    if (userBirthYear.value == zodiacYears.rooster[i]) {
      userZodiac = "rooster";
      userYears = zodiacYears.rooster;
    }
  }
  for (var i = 0; i < zodiacYears.dog.length; i++) {
    if (userBirthYear.value == zodiacYears.dog[i]) {
      userZodiac = "dog";
      userYears = zodiacYears.dog;
    }
  }
  for (var i = 0; i < zodiacYears.pig.length; i++) {
    if (userBirthYear.value == zodiacYears.pig[i]) {
      userZodiac = "pig";
      userYears = zodiacYears.pig;
    }
  }
}

// Chooses a random year from the assigned zodiac array
function chooseYear() {
  var validYears = userYears.filter(
    (userYear) => userYear >= 1980 && userYear <= 2022
  );

  function getRandomIntInclusive(min = 0, max = validYears.length - 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  chosenYear = validYears[getRandomIntInclusive()];
  console.log(chosenYear);
}

// Gets API info and chooses a different year if any empty object is returned
function getCarApi() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=${chosenYear}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "300eaad7a9msha0f4b2341a1eaf5p1dc711jsncb8ce3e78087",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    carData = response;
    console.log("carData", carData);
    userCar = `${carData[0].year} ${carData[0].make} ${carData[0].model}`;
    console.log(userCar);
    getImageApi();
  });
}

// gets image from API
function getImageApi() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.pexels.com/v1/search?query=${carData[0].make} car`,
    method: "GET",
    headers: {
      Authorization: "563492ad6f9170000100000125fc35443ac14f708d6dc9b7b281a2fd",
    },
  };

  $.ajax(settings).done(function (response) {
    carImage = response;
    console.log("carImage", carImage);
    renderCarImage();
    userDataCapture();
    storeData();
    init();
    varReset();
  });
}

//   Add user list
function renderPrevUsers() {
  // Clear userList element
  userList.innerHTML = "";

  // Render a new ul for each previous user
  for (var i = 0; i < storedUserData.name.length; i++) {
    var name = storedUserData.name[i];
    var birthYear = storedUserData.birthYear[i];
    var zodiac = storedUserData.zodiac[i];
    var car = storedUserData.car[i];
    var newUserDiv = document.createElement("div");
    newUserDiv.classList.add("Div-usersList");
    userList.appendChild(newUserDiv);
    var ul = document.createElement("ul");
    ul.textContent = `${name} (${birthYear}), a ${zodiac}, was recommended a ${car.toUpperCase()}!`;
    newUserDiv.appendChild(ul);
  }
}

// saving the username and year for local storage IS WORKING
function storeData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

function loadUserData() {
  storedUserData = JSON.parse(localStorage.getItem("userData"));
}

function userDataCapture() {
  userData.name.push(userName.value);
  userData.birthYear.push(userBirthYear.value);
  userData.zodiac.push(userZodiac);
  userData.car.push(userCar);
}

//   Add cars list
function renderCarImage() {
  // Clear current render
  carList.innerHTML = "";

  var newCarDiv = document.createElement("div");
  newCarDiv.classList.add("Div-carList");
  carList.appendChild(newCarDiv);

  var newImageElem = document.createElement("img");
  newImageElem.setAttribute("src", carImage.photos[0].src.tiny);
  newCarDiv.appendChild(newImageElem);

  var newTextElem = document.createElement("h6");
  newTextElem.textContent = userCar.toUpperCase();
  newCarDiv.appendChild(newTextElem);
}

// Wheele spining
var force = 0;
var angle = 0;
var rota = 1;
var inertia = 0.985;
var minForce = 15;
var randForce = 15;
var rouletteElem = document.getElementsByClassName("roulette_wheel")[0];
var scoreElem = document.getElementById("score");

function roulette_spin(btn) {
  scoreElem.textContent = `Your Chinese zodiac animal is the ${userZodiac.toUpperCase()}!`;
  // set initial force randomly
  force = Math.floor(Math.random() * randForce) + minForce;
  requestAnimationFrame(doAnimation);
}

function doAnimation() {
  // new angle is previous angle + force modulo 360 (so that it stays between 0 and 360)
  angle = (angle + force) % 360;
  // decay force according to inertia parameter
  force *= inertia;
  rouletteElem.style.transform = "rotate(" + angle + "deg)";
  // stop animation if force is too low
  requestAnimationFrame(doAnimation);
  // document.getElementsByClassName('roulette_center')[0].addEventListener('click', roulette_spin);
}

// Get DOM Elements
const modal = document.querySelector("#my-modal");
const closeBtn = document.querySelector(".close");

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function init() {
  loadUserData();
  if (storedUserData) {
    renderPrevUsers();
  }
}

function varReset() {
  userZodiac = null;
  userYears = null;
  chosenYear = null;
  carData = null;
  carImage = null;
}

function btnWrapper() {
  if (
    userBirthYear.value >= 1960 &&
    userBirthYear.value <= 2022 &&
    userName.value
  ) {
    getUserZodiac();
    chooseYear();
    getCarApi();
    roulette_spin();
    roulette_spin(this);
  } else {
    openModal();
  }
}

// Events
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
wheelBtn.addEventListener("click", btnWrapper);
userBirthYear.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnWrapper();
  }
});
userName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnWrapper();
  }
});

init();
