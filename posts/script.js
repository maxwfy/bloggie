$(document).ready(function(){

  // CONNECTING LOCATION API
  var ipCheckAPI = "http://ip-api.com/json";
  
  function Get(ipCheckAPI){
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET",ipCheckAPI,false);
	Httpreq.send(null);
			  return Httpreq.responseText;          
}
  
  // PARSING API JSON AND CREATING OUT LOCATION OBJECT
  var ipCheck_obj = JSON.parse(Get(ipCheckAPI));
  var city = ipCheck_obj.city;
  var country = ipCheck_obj.country;
  
  $("#location").append(city+", "+country);
  
  // CREATING A CALL TO OPEN WEATHER API USING PULLED LOCATION DATA FROM ABOVE OBJECT
  var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid=06974390a83935c0e6361ffb41540a81";
  
  
  function Get(weatherAPI){
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET",weatherAPI,false);
	Httpreq.send(null);
			  return Httpreq.responseText;          
}
  
  // CREATING AN OBJECT WITH PARSED FROM OPEN WEATHER API DATA
    var weather_obj = JSON.parse(Get(weatherAPI));
    $("#weatherIcon").append('<img src="http://openweathermap.org/img/w/'+weather_obj.weather[0].icon+'.png">');
    $("#cond").append(weather_obj.weather[0].description);
    $("#temp").append(parseInt(weather_obj.main.temp)+"&nbsp;&#x2109;");
  
    // BACKGROUND WEATHER SWITCH DEPENDING ON TEMPERATURE
    var tempLvl = weather_obj.main.temp;
    var bgImagesArray = ['url(https://drive.google.com/file/d/0B8mHzr-lGw3eX1hOT0R5aFB6ZUU/view?usp=sharing)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3eTE9LUVY0OTNVUjg)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3eZk9Td1psb3haQUU)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3edVdGblRlTkdNX1k)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3eU1E3alJwM3owX1k)','url(https://drive.google.com/open?id=0B8mHzr-lGw3eVnRDaDkxZEw3SHM)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3ecHFpRldsZlRKZWs)', 'url(https://drive.google.com/open?id=0B8mHzr-lGw3eTWttSFNxZVpxRWM)'];
  
  if (tempLvl >= 100){
     $("body").css("background-image", bgImagesArray[0]);
   } else if (tempLvl <= 99 && tempLvl >= 89) {
     $("body").css("background-image", bgImagesArray[1]);
   } else if (tempLvl <= 88 && tempLvl >= 80) {
     $("body").css("background-image", bgImagesArray[2]);
   } else if (tempLvl <= 79 && tempLvl >= 72) {
     $("body").css("background-image", bgImagesArray[3]);
   } else if (tempLvl <= 71 && tempLvl >= 61) {
     $("body").css("background-image", bgImagesArray[4]);
   } else if (tempLvl <= 60 && tempLvl >= 50) {
     $("body").css("background-image", bgImagesArray[5]);
   } else if (tempLvl <= 49 && tempLvl >= 39) {
     $("body").css("background-image", bgImagesArray[6]);
   } else if (tempLvl <= 38 && tempLvl >= 26) {
     $("body").css("background-image", bgImagesArray[7]);
   } else if (tempLvl <= 25) {
     $("body").css("background-image", bgImagesArray[8]);
   };
  
 // CONVERTING FAHRENHEIT TO CELSIUS AND VICA VERSA 
    $("#cb").on("click", function() { 
      var update = parseInt((weather_obj.main.temp - 32) * 5/9) + "&nbsp;&#x2103;";
      $("#temp").html(update);
    });
    $("#fb").on("click", function() { 
      $("#temp").html(parseInt(weather_obj.main.temp)+"&nbsp;&#x2109;");
    });
  
});

