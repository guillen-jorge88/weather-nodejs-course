const axios = require("axios");

const getPlaceLatLng = async(address) => {
    let encodeUrl = encodeURI(address);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDmo0fbJxXqlRtK1dHklgeATicfYH7U3nM`);
    
    if(resp.data.status === 'ZERO_RESULTS') throw new Error(`there is no result for this place: ${address}`);
    
    let locationData = resp.data.results[0];
    let coors = locationData.geometry.location;
    
    return {
        address: locationData.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {getPlaceLatLng}