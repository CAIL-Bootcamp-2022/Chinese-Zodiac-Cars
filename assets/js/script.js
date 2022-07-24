// var SubmitBtn = document.getElementById("black")
var wheelBtn = document.getElementById("wheel-btn");
var userList = document.getElementById("userList");
var carList = document.getElementById("carList");
var firstName = document.getElementById("fname");
var birthYear = document.getElementById("birthyear");
var zodiacAnimal = "";
var userYears = [];
var chosenYear;
var carSearchData;

const zodiacYears = {
  rat: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
  ox: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
  tiger: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
  rabbit: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
  dragon: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
  snake: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
  horse: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
  goat: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
  monkey: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
  rooster: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
  dog: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
  pig: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
};

// Checks user entered birth year against all zodiac arrays and assigns zodiac on matching value
function userZodiac() {
  for (var i = 0; i < zodiacYears.rat.length; i++) {
    if (birthYear.value == zodiacYears.rat[i]) {
      zodiacAnimal = "rat";
      userYears = zodiacYears.rat;
    }
  }
  for (var i = 0; i < zodiacYears.ox.length; i++) {
    if (birthYear.value == zodiacYears.ox[i]) {
      zodiacAnimal = "ox";
      userYears = zodiacYears.ox;
    }
  }
  for (var i = 0; i < zodiacYears.tiger.length; i++) {
    if (birthYear.value == zodiacYears.tiger[i]) {
      zodiacAnimal = "tiger";
      userYears = zodiacYears.tiger;
    }
  }
  for (var i = 0; i < zodiacYears.rabbit.length; i++) {
    if (birthYear.value == zodiacYears.rabbit[i]) {
      zodiacAnimal = "rabbit";
      userYears = zodiacYears.rabbit;
    }
  }
  for (var i = 0; i < zodiacYears.dragon.length; i++) {
    if (birthYear.value == zodiacYears.dragon[i]) {
      zodiacAnimal = "dragon";
      userYears = zodiacYears.dragon;
    }
  }
  for (var i = 0; i < zodiacYears.snake.length; i++) {
    if (birthYear.value == zodiacYears.snake[i]) {
      zodiacAnimal = "snake";
      userYears = zodiacYears.snake;
    }
  }
  for (var i = 0; i < zodiacYears.horse.length; i++) {
    if (birthYear.value == zodiacYears.horse[i]) {
      zodiacAnimal = "horse";
      userYears = zodiacYears.horse;
    }
  }
  for (var i = 0; i < zodiacYears.goat.length; i++) {
    if (birthYear.value == zodiacYears.goat[i]) {
      zodiacAnimal = "goat";
      userYears = zodiacYears.goat;
    }
  }
  for (var i = 0; i < zodiacYears.monkey.length; i++) {
    if (birthYear.value == zodiacYears.monkey[i]) {
      zodiacAnimal = "monkey";
      userYears = zodiacYears.monkey;
    }
  }
  for (var i = 0; i < zodiacYears.rooster.length; i++) {
    if (birthYear.value == zodiacYears.rooster[i]) {
      zodiacAnimal = "rooster";
      userYears = zodiacYears.rooster;
    }
  }
  for (var i = 0; i < zodiacYears.dog.length; i++) {
    if (birthYear.value == zodiacYears.dog[i]) {
      zodiacAnimal = "dog";
      userYears = zodiacYears.dog;
    }
  }
  for (var i = 0; i < zodiacYears.pig.length; i++) {
    if (birthYear.value == zodiacYears.pig[i]) {
      zodiacAnimal = "pig";
      userYears = zodiacYears.pig;
    }
  }
}

// Chooses a random year from the assigned zodiac array
function chooseYear() {
  function getRandomIntInclusive(min = 0, max = userYears.length) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  chosenYear = userYears[getRandomIntInclusive()];
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
    console.log("car-response", response);
    if (response.length === 0) {
      chooseYear();
      getCarApi();
    }
    else {
      carSearchData = `${response[0].make}`
      console.log("carSearchData",carSearchData)
      getImageApi();
    }
  });
}

// gets image from API
function getImageApi() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.pexels.com/v1/search?query=${carSearchData}`,
    method: "GET",
    headers: {
      Authorization: "563492ad6f9170000100000125fc35443ac14f708d6dc9b7b281a2fd",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log("image-response", response);
  });
}

//   Add user list
function addNewUser() {
  var newUserDiv = document.createElement("div");
  newUserDiv.classList.add("Div-usersList");
  userList.appendChild(newUserDiv);
}

//   Add cars list
function addNewCar() {
  var newCarDiv = document.createElement("div");
  newCarDiv.classList.add("Div-carList");
  carList.appendChild(newCarDiv);
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

var values = [
  "Your chinese horoscope is Rat",
  " Your chinese horoscope is Ox",
  " Your chinese horoscope is Tiger",
  " Your chinese horoscope is Rabbit",
  "Your chinese horoscope is Dragon",
  " Your chinese horoscope is Snake",
  " Your chinese horoscope is Horse",
  "Your chinese horoscope is Sheep",
  "Your chinese horoscope is Monkey",
  "Your chinese horoscope is Rooster",
  "Your chinese horoscope is Dog ",
  "Your chinese horoscope is Pig",
].reverse();

function roulette_spin(btn) {
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
  if (force < 0.05) {
    // score roughly estimated
    scoreElem.innerHTML =
      values[Math.floor((angle / 360) * values.length - 0.5)];
    return;
  }
  requestAnimationFrame(doAnimation);
  // document.getElementsByClassName('roulette_center')[0].addEventListener('click', roulette_spin);
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

// Events
wheelBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function btnWrapper() {
  if (birthYear.value >= 1900 && birthYear.value <= 2022) {
  console.log("birthYear.value", birthYear.value);
  userZodiac();
  console.log("userYears", userYears);
  chooseYear();
  console.log("chosenYear", chosenYear);
  getCarApi();
  // addNewUser();
  // addNewCar();
  roulette_spin();
  roulette_spin(this);}
  else {
    modal();
  }
}

wheelBtn.addEventListener("click", btnWrapper);
