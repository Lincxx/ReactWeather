var axios = require('axios');

const OPEN_WEAHTER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d8d044dd735e5a58d4610048828f415a&units=imperial';


//d8d044dd735e5a58d4610048828f415a

module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEAHTER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
           
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res){
            throw new Error(res.data.message);
        });
    }
}