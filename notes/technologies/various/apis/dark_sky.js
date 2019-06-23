https://api.darksky.net/forecast/d4384f8041d61dc78c973fa48d3fab7d/37.8267,-122.4233,977052240000

https://api.darksky.net/forecast/d4384f8041d61dc78c973fa48d3fab7d/42.3601,-71.0589,255657600?exclude=currently,flags

new Date('2000-12-17T03:24:00').getTime()
977052240000




github api
npm api
weather api / historical data dump
maps
images


contribute to opensource
  ideas -> https://www.firsttimersonly.com/
  practice opensource -> https://github.com/firstcontributions/first-contributions

find an api
  https://rapidapi.com/





// axios.get(`https://api.darksky.net/forecast/2d49a1a136dc76649589fca68494a29a/40.6635,-73.9387?exclude=minutely,hourly`)

const data = require('./data');

function getMax(key) {
  var cityName = '';
  var maxObj = null;

  for (var city in data) {
    var curObj = data[city];

    if (curObj) {
      if (maxObj === null || curObj[key] > maxObj[key]) {
        cityName = city;
        maxObj = curObj;
      }
    }
  }
  return {
    [cityName] : maxObj
  }
}

function sortBy(key) {
  var dataArr = [];

  Object.keys(data).forEach(city => {
    dataArr.push([city, data[city]]);
  });

  return dataArr.sort((a, cityArr) => {
    return cityArr[1][key] < a[1][key] ? 1 : -1;
  });
}

function filterBy(key, min, max) {
  var dataArr = [];

  Object.keys(data).forEach(city => {
    dataArr.push([city, data[city]]);
  });
  
  if (!min && !max) {
    return dataArr
  }
  if (!max) {
    return dataArr.filter(city => {
      return city[1][key] > min;
    });
  }
  if (!min) {
    return dataArr.filter(city => {
      return city[1][key] < max;
    });
  }
  return dataArr.filter(city => {
    return city[1][key] > min && city[1][key] < max;
  });
};


// console.log('nearestStormBearing', getMax('nearestStormBearing'));
// console.log('precipIntensity', getMax('precipIntensity'));
// console.log('precipProbability', getMax('precipProbability'));
// console.log('temperature', getMax('temperature'));
// console.log('humidity', getMax('humidity'));
// console.log('windSpeed', getMax('windSpeed'));
// console.log('cloudCover', getMax('cloudCover'));
// console.log('visibility', getMax('visibility'));
// console.log('precipProbability', getMax('precipProbability'));
                    
// console.log('nearestStormBearing', sortBy('nearestStormBearing'));
// console.log('precipIntensity', sortBy('precipIntensity'));
// console.log('precipProbability', sortBy('precipProbability'));
// console.log('temperature', sortBy('temperature'));
// console.log('humidity', sortBy('humidity'));
// console.log('windSpeed', sortBy('windSpeed'));
// console.log('cloudCover', sortBy('cloudCover'));
// console.log('visibility', sortBy('visibility'));
// console.log('precipProbability', sortBy('precipProbability'));
                    
// console.log('nearestStormBearing', filterBy('nearestStormBearing'));
// console.log('precipIntensity', filterBy('precipIntensity'));
// console.log('precipProbability', filterBy('precipProbability'));
console.log('temperature', filterBy('temperature'));
// console.log('humidity', filterBy('humidity'));
// console.log('windSpeed', filterBy('windSpeed'));
// console.log('cloudCover', filterBy('cloudCover'));
// console.log('visibility', filterBy('visibility'));
// console.log('precipProbability', filterBy('precipProbability'));



// top 100 cities worldwide

var str = `
Hong_Kong
Bangkok
London
Singapore
Macau
Paris
Dubai
New_York_City
Kuala_Lumpur
Shenzhen
Phuket
Istanbul
Delhi
Tokyo
Rome
Antalya
Taipei
Guangzhou
Mumbai
Prague
Mecca
Miami
Amsterdam
Seoul
Pattaya
Shanghai
Los_Angeles
Las_Vegas
Agra
Osaka
Barcelona
Milan
Denpasar
Vienna
Cancún
Berlin
Ho_Chi_Minh_City
Riyadh
Venice
Jaipur
Madrid
Orlando
Chennai
Dublin
Florence
Moscow
Athens
Cairo
Ha_Noi
Toronto
Ha_Long
Beijing
Sydney
Munich
Budapest
Punta_Cana
St_Peters_burg
Jakarta
Dammam_City
Lisbon
Jerusalem
Chiang_Mai
Zhuhai
Penang_Island
Kyoto
Heraklion
Phnom_Penh
Brussels
Vancouver
Copenhagen
San_Francisco
Warsaw
Krakow
Melbourne
Honolulu
Marrakech
Auckland
Lviv
Tel_Aviv
Kolkatta
Frankfurt
Guilin
Stockholm
Siem_Reap
Jeju
Mexico_City
Buenos_Aires_City
Chiba
Lima
Nice
Santiago
Rio_de_Janeiro
Abu_Dhabi
Porto
Batam
Doha
Rhodes
Krabi`

function toArray(str) {
  return str.split('\n').map(city => city);
}

var arr = toArray(str);

function lowerArray(arr) {
  return arr.map(city => city.toLowerCase());
}

console.log(lowerArray(arr)); 



