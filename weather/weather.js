const axios = require("axios");

const getWeather = async(lat, lng)=>{
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bc54bd53bb38903967232584db3eafc9`);

    let main = resp.data.main;
    let temperature = main.temp;
    return temperature;
}

module.exports={
    getWeather
}