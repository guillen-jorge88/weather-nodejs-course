const {getPlaceLatLng} = require('./place/place');
const {getWeather} = require('./weather/weather');
const argv = require('yargs').options({
    address:{
        alias: 'a',
        desc:'address contry climate',
        demand: true
    }
}).argv;

let getInfo = async (address) => {
    try{
        let coors = await getPlaceLatLng(address);
        let temp = await getWeather(coors.lat,coors.lng);
        return `The climate in ${coors.address} is ${temp}`;
    }catch(e){
        return `The weather could not be determined in ${address}`;
    }
    
}

getInfo(argv.address)
    .then(info => console.log(info))
    .catch(e=>console.log(e));