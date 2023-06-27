const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const imageField = document.querySelector(".weather3 .weather-image");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchcity");
const formField = document.querySelector("form");



let city = "hyderabad"

const fetchData = async() =>{

  const url = `https://api.weatherapi.com/v1/current.json?key=fc29fcec7a284b499d452947232706&q=${city}`

  const response = await fetch(url)
  const data = await response.json()


  console.log(data)

  storeData(data.current.temp_c,data.location.name,data.location.localtime,data.current.condition.text,data.current.condition.icon)


}



const storeData = (temperature,city,date,description, image)=>{
  temperatureField.innerHTML = temperature
  cityField.innerHTML = city
  dateField.innerHTML = date
  weatherField.innerHTML = description
  imageField.src = image
}

fetchData()


const search = (e)=>{
  e.preventDefault();
  city = searchField.value;
  fetchData();
  searchField.value = "";
}


formField.addEventListener("submit",search);

