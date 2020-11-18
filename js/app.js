function getWeather() {
    // Skopje
    let temp2 = document.getElementById("temp2");
    let desc2 = document.getElementById("desc2");
    let loc2 = document.getElementById("loc2");
    // Bitola
    let temp3 = document.getElementById("temp3");
    let desc3 = document.getElementById("desc3");
    let loc3 = document.getElementById("loc3");
    // Strumica
    let temp4 = document.getElementById("temp4");
    let desc4 = document.getElementById("desc4");
    let loc4 = document.getElementById("loc4");
    // Ohrid
    let temp5 = document.getElementById("temp5");
    let desc5= document.getElementById("desc5");
    let loc5 = document.getElementById("loc5");

    // Veles
    let temp6 = document.getElementById("temp6");
    let desc6= document.getElementById("desc6");
    let loc6 = document.getElementById("loc6");

    // USER
    let userTemp = document.getElementById("userTemp");
    let userDesc= document.getElementById("userDesc");
    let userLoc = document.getElementById("userLoc");
    let userIco = document.getElementById("userIco");


    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "9b36077029be5c503dfe15fd47d70cad";

    //loc1.innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        
        latitude_sk = 41.9981;
        longitude_sk = 21.4254;

        latitude_bt = 41.0297;
        longitude_bt = 21.3292;

        latitude_st = 41.4378;
        longitude_st = 22.6427;
        // Ohrid
        latitude_oh = 41.1231;
        longitude_oh = 20.8016;    
        
        latitude_ve = 41.7165;
        longitude_ve = 21.7723; 

        latitude_ko = 41.9168;
        longitude_ko = 22.4083;   

        latitude_go = 41.8026;
        longitude_go = 20.9089; 
        
        latitude_ka = 41.4329;
        longitude_ka = 22.0089;  
    
        latitude_pr = 41.3441;
        longitude_pr = 21.5528;  
    
        // User Geo
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;


        let url = api + "?lat=" + latitude_sk + "&lon=" + longitude_sk + "&appid=" + apiKey + "&units=metric";
        let url2 = api + "?lat=" + latitude_bt + "&lon=" + longitude_bt + "&appid=" + apiKey + "&units=metric";
        let url3 = api + "?lat=" + latitude_st + "&lon=" + longitude_st + "&appid=" + apiKey + "&units=metric";
        let url4 = api + "?lat=" + latitude_oh + "&lon=" + longitude_oh + "&appid=" + apiKey + "&units=metric";
        let url5 = api + "?lat=" + latitude_ve + "&lon=" + longitude_ve + "&appid=" + apiKey + "&units=metric";
        let url6 = api + "?lat=" + latitude_ko + "&lon=" + longitude_ko + "&appid=" + apiKey + "&units=metric";
        let url7 = api + "?lat=" + latitude_go + "&lon=" + longitude_go + "&appid=" + apiKey + "&units=metric";
        let url8 = api + "?lat=" + latitude_ka + "&lon=" + longitude_ka + "&appid=" + apiKey + "&units=metric";
        let url9 = api + "?lat=" + latitude_pr + "&lon=" + longitude_pr + "&appid=" + apiKey + "&units=metric";
        let usr = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=metric";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temp2.innerHTML = temp + "° C";
                desc2.innerHTML = data.name;
                loc2.innerHTML = data.weather[0].main;

            });
        
        fetch(url2)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp3.innerHTML = temp + "° C";
            desc3.innerHTML = data.name;
            loc3.innerHTML = data.weather[0].main;

        });
        fetch(url3)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp4.innerHTML = temp + "° C";
            desc4.innerHTML = data.name;
            loc4.innerHTML = data.weather[0].main;

        });  
        fetch(url4)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp5.innerHTML = temp + "° C";
            desc5.innerHTML = data.name;
            loc5.innerHTML = data.weather[0].main;

        });      
        fetch(url5)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp6.innerHTML = temp + "° C";
            desc6.innerHTML = data.name;
            loc6.innerHTML = data.weather[0].main;

        });    
        fetch(url6)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp7.innerHTML = temp + "° C";
            desc7.innerHTML = data.name;
            loc7.innerHTML = data.weather[0].main;

        });  
        fetch(url7)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp8.innerHTML = temp + "° C";
            desc8.innerHTML = data.name;
            loc8.innerHTML = data.weather[0].main;

        });   
        fetch(url8)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp9.innerHTML = temp + "° C";
            desc9.innerHTML = data.name;
            loc9.innerHTML = data.weather[0].main;

        });
        fetch(url9)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temp10.innerHTML = temp + "° C";
            desc10.innerHTML = data.name;
            loc10.innerHTML = data.weather[0].main;

        });    
        fetch(usr)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let temp = data.main.temp;
            userTemp.innerHTML = "Temperature there is  " + temp + "° C   ";
            userDesc.innerHTML = "City " + data.name;
            userLoc.innerHTML = "Sky is " + data.weather[0].main;

        });  

    }
    function error() {
        loc2.innerHTML = "Unable to retrieve your location";

    }

}

getWeather();