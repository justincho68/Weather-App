export const geoApiOptions =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84ec4e2f04msh4b46573fc1dc52dp1d08f7jsn0e68e6b9acb9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "c3685f4322464e3cac5410dd0b0b9ea1";