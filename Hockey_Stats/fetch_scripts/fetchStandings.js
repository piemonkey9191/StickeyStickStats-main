/*The different URLS for different types of standings(Selected apon 
    user input of what they want to look at) */
const api_url = 'https://statsapi.web.nhl.com/api/v1/standings'
const standings_league = '/byLeague';
const standings_by_conference = '/byConference';
const standings_wildCard = '/wildcard';
const standings_division_leaders = '/divisionLeaders';

let api_extension = '';
let teams = 0;

/*if statement that assigns the api_extension_URL var dependent
on what button the button the user selects*/


//fetching the JSON file data and converting it to where it needs to go
async function getStandings(table) {

    const tableBody = table.querySelector("tbody");

    //Variables that get the data from JSON File and assign it an object
    const response = await fetch(api_url + standings_league);
    const data = await response.json();
    const teamStandings = data['records'][0]['teamRecords'];

    //Clear the Table
    tableBody.innerHTML = "";

    //testing out a for loop for teamRecord
    for (teams = 0; teams < teamStandings.length; teams++) {

        //Variables that are fetched from JSON file
        const teamRank = teamStandings[teams]['leagueRank'];
        const teamName = teamStandings[teams]['team']['name'];
        const gamesPlayed = teamStandings[teams]['gamesPlayed'];
        const wins = teamStandings[teams]['leagueRecord']['wins'];
        const losses = teamStandings[teams]['leagueRecord']['losses'];
        const ot = teamStandings[teams]['leagueRecord']['ot'];
        const teamPoints = teamStandings[teams]['points'];
        const teamPointPercent = teamStandings[teams]['pointsPercentage'].toFixed(3);
        const teamRegulationWins = teamStandings[teams]['regulationWins'];
        const teamROW = teamStandings[teams]['row']
        const goalsFor = teamStandings[teams]['goalsScored'];
        const goalsAgainst = teamStandings[teams]['goalsAgainst'];
        const goalDiff = goalsFor - goalsAgainst;
        const teamSTK = teamStandings[teams]['streak']['streakCode'];

        //creates array for standings
        const row = [teamRank, teamName, gamesPlayed, wins, losses, ot, teamPoints, 
            teamPointPercent, teamRegulationWins, teamROW, goalsFor, goalsAgainst,
            goalDiff, teamSTK];

        // Populate the rows and cells
        const tbody = document.querySelector('tbody');
        
        for (let i = 0; i < 1; i++){
            const tr = tbody.insertRow();

            row.forEach(item => {
                tr.insertCell().innerText = item;
            });
        };
    };
};

getStandings(document.querySelector('table'));