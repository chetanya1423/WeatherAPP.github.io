
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d8e55c203msh1726babd5f9e8cfp175db8jsn2815c021cdb4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
  //cloud_pct.innerHTML=response.cloud_pct
  if(response.temp<19 && response.wind_speed>10){
    background();
  }
  else if(response.temp>19 && response.wind_speed<10){
    background1();
  }
  else if( response.wind_speed>14){
    background2();
  }
  else{
    background3();
  }
  temp.innerHTML=response.temp
  temp2.innerHTML=response.temp
  feels_like.innerHTML=response.feels_like
  humidity.innerHTML=response.humidity
  humidity2.innerHTML=response.humidity
  min_temp.innerHTML=response.min_temp
  max_temp.innerHTML=response.max_temp
  wind_speed.innerHTML=response.wind_speed
  wind_speed2.innerHTML=response.wind_speed
  wind_degrees.innerHTML=response.wind_degrees
  sunrise.innerHTML=response.sunrise
  sunset.innerHTML=response.sunset
    })
	.catch(err => console.error(err));
}
search.addEventListener("click",function(e){
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Aligarh");
function background(){
    document.getElementById("back").style.backgroundImage="url('Img/jonathan-bowers-BqKdvJ8a5TI-unsplash.jpg')";
    document.getElementById("back").style.backgroundSize="cover";
    document.getElementById("back").style.backgroundAttachment="fixed";
    document.getElementById("back").style.backgroundRepeat="no-repeat";
}
function background1(){
    document.getElementById("back").style.backgroundImage="url('Img/istockphoto-947314334-612x612.jpg')";
    document.getElementById("back").style.backgroundSize="cover";
    document.getElementById("back").style.backgroundAttachment="fixed";
    document.getElementById("back").style.backgroundRepeat="no-repeat";
}
function background2(){
    document.getElementById("back").style.backgroundImage="url('Img/palm-trees-wind-windy-weather.jpg')";
    document.getElementById("back").style.backgroundSize="cover";
    document.getElementById("back").style.backgroundRepeat="no-repeat"
}
function background3(){
    document.getElementById("back").style.backgroundImage="url('Img/heaven-gb69fbbcd3_1920.jpg')";
    document.getElementById("back").style.backgroundSize="cover";
    document.getElementById("back").style.backgroundRepeat="no-repeat"
}






const navi = document.querySelector(".nav-con");
document.querySelector(".bi-list").addEventListener("click",function(){
navi.classList.add("active");
document.querySelector("#bi-list").style.display="none";
})
document.querySelector(".bi-x").addEventListener("click",function(){
    navi.classList.remove("active");
    document.querySelector("#bi-x").style.display="block";
    document.querySelector("#bi-list").style.display="block";
})