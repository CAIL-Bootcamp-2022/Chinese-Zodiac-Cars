// var SubmitBtn = document.getElementById("Submit")
var wheelBtn = document.querySelector("#wheel-btn");
var carSearchYear = document.querySelector("#birthyear");
var userList = document.getElementById("userList");
var carList = document.getElementById("carList");
var firstName = document.getElementById("fname");
var birthYear = document.getElementById("birthyear");
var zodiacAnimal = "";
var userYears = [];
var chosenYear = 2020;

const zodiacYears = {
  rat: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
  ox: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
  tiger: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
  rabbit: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
  dragon: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
  snake: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
  horse: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
  goat: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
  monkey: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
  rooster: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
  dog: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
  pig: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
};

function userZodiac() {
  for (var i = 0; i < zodiacYears.rat.length; i++) {
    if (birthYear.value === zodiacYears.rat[i]) {
      zodiacAnimal = "rat";
      userYears = zodiacYears.rat;
    }
  }
  for (var i = 0; i < zodiacYears.ox.length; i++) {
    if (birthYear.value === zodiacYears.ox[i]) {
      zodiacAnimal = "ox";
      userYears = zodiacYears.ox;
    }
  }
  for (var i = 0; i < zodiacYears.tiger.length; i++) {
    if (birthYear.value === zodiacYears.tiger[i]) {
      zodiacAnimal = "tiger";
      userYears = zodiacYears.tiger;
    }
  }
  for (var i = 0; i < zodiacYears.rabbit.length; i++) {
    if (birthYear.value === zodiacYears.rabbit[i]) {
      zodiacAnimal = "rabbit";
      userYears = zodiacYears.rabbit;
    }
  }
  for (var i = 0; i < zodiacYears.dragon.length; i++) {
    if (birthYear.value === zodiacYears.dragon[i]) {
      zodiacAnimal = "dragon";
      userYears = zodiacYears.dragon;
    }
  }
  for (var i = 0; i < zodiacYears.snake.length; i++) {
    if (birthYear.value === zodiacYears.snake[i]) {
      zodiacAnimal = "snake";
      userYears = zodiacYears.snake;
    }
  }
  for (var i = 0; i < zodiacYears.horse.length; i++) {
    if (birthYear.value === zodiacYears.horse[i]) {
      zodiacAnimal = "horse";
      userYears = zodiacYears.horse;
    }
  }
  for (var i = 0; i < zodiacYears.goat.length; i++) {
    if (birthYear.value === zodiacYears.goat[i]) {
      zodiacAnimal = "goat";
      userYears = zodiacYears.goat;
    }
  }
  for (var i = 0; i < zodiacYears.monkey.length; i++) {
    if (birthYear.value === zodiacYears.monkey[i]) {
      zodiacAnimal = "monkey";
      userYears = zodiacYears.monkey;
    }
  }
  for (var i = 0; i < zodiacYears.rooster.length; i++) {
    if (birthYear.value === zodiacYears.rooster[i]) {
      zodiacAnimal = "rooster";
      userYears = zodiacYears.rooster;
    }
  }
  for (var i = 0; i < zodiacYears.dog.length; i++) {
    if (birthYear.value === zodiacYears.dog[i]) {
      zodiacAnimal = "dog";
      userYears = zodiacYears.dog;
    }
  }
  for (var i = 0; i < zodiacYears.pig.length; i++) {
    if (birthYear.value === zodiacYears.pig[i]) {
      zodiacAnimal = "pig";
      userYears = zodiacYears.pig;
    }
  }
}

function chooseYear() {
  function getRandomIntInclusive(min = 0, max = 8) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  chosenYear = userYears[getRandomIntInclusive()];
}

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
  });
}

// gets image from API
function getImageApi() {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.pexels.com/v1/search?query=${carData}`,
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

function btnWrapper() {
  console.log("birthYear.value",birthYear.value);
  userZodiac();
  console.log("userYears", userYears);
  chooseYear();
  console.log("chosenYear", chosenYear);
  getCarApi();
  // getImageApi();
  // addNewUser();
  // addNewCar();
}

wheelBtn.addEventListener("click", btnWrapper);
