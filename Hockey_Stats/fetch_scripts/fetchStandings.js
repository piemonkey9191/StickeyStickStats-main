/*The different URLS for different types of standings(Selected apon 
    user input of what they want to look at) */
const api_url = 'https://statsapi.web.nhl.com/api/v1/standings'
const standings_league_url = '/byLeague';
const standings_by_conference_url = '/byConference';
const standings_wildCard = '/wildcard';
const standings_division_leaders = '/divisionLeaders';

let api_extension_url = '';

/*if statement that assigns the api_extension_URL var dependent
on what button the button the user selects*/


//fetching the JSON file data and converting it to where it needs to go
async function getStandings() {

    //Variables that get the data from JSON File and assign it an object
    const response = await fetch(api_url + standings_league_url);
    const data = await response.json();

    console.log(data);
};

getStandings();