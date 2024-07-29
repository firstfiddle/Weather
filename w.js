const searchInput=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const img=document.querySelector('.icon');


let w = async function getWeather(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20da423906ccf27bec8c2d81c8f4a2eb&units=metric`)
    if(res.status == 404){
        document.querySelector('.error').style.display = 'block';
    }else {
        document.querySelector('.error').style.display = 'none';
    }
    var data = await res.json();
    console.log(data);
    document.querySelector('.cel').innerHTML= Math.round(data.main.temp)  + "°C";
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.humi').innerHTML= Math.round(data.main.humidity) +"%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        img.src="images/clouds.png"
    }else if(data.weather[0].main == 'Clear'){
           img.src="images/sun1.png"
    }else if (data.weather[0].main == 'Rain'){
           img.src="images/rain1.png"
    }else if (data.weather[0].main == 'Drizzle'){
            img.src="images/drr.png"
    }else if (data.weather[0].main == 'Mist'){
             img.src="images/"
    }
}


searchBtn.addEventListener('click' , ()=>{
    w(searchInput.value)
})