const  apiKey = "b70ead482c95393a74760b71a90d870d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const  searchInput =  document.querySelector(".search input")
const  searchBtn =  document.querySelector(".search button")
const weatherIcon = document.querySelector(".image1")


async function  checkWeather(cityName) {
    console.log(cityName)
    const response  =  await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    if(data.weather != null)
    {
        document.querySelectorAll('.weather')
        .forEach( (weather)  =>  {
            weather.style.display = "flex"
        })
        weatherIcon.src = `weather-app-img/images/${data.weather[0].main}.png`
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humid').innerHTML = data.main.humidity + "%";
        document.querySelector('.speed').innerHTML = data.wind.speed + "Km/h";
    }

    else{
        alert("Enter correct city")
    }

   
}



searchBtn.addEventListener('click', ()  =>{
    if(searchInput.value == "")
    {
        alert('Enter A city')
    }
    
    else{  
        checkWeather(searchInput.value)
    }
})

