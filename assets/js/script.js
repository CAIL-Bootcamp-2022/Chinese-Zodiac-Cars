// var SubmitBtn = document.getElementById("Submit")
var wheelBtn = document.querySelector("#wheel-btn");
var carSearchYear = document.querySelector("#birthyear");
var userList = document.getElementById("userList");
var carList = document.getElementById("carList");
var firstName = document.getElementById("fname");
var birthYear = document.getElementById("birthyear");

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

function loadCarData() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://car-data.p.rapidapi.com/cars/types",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc01b57ea1mshaa4f3952e2dd924p15fbecjsn41cb7f5ff069",
      "X-RapidAPI-Host": "car-data.p.rapidapi.com",
    },
  };
  //creat ajax object
  $.ajax(settings).then(function (response) {
    console.log("Ajax Reponse \n-------------");
    console.log(response);
  });
}

wheelBtn.addEventListener("click", loadCarData);

loadCarData();

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

loadCarData();
loadImage();
addNewUser();
addNewCar();