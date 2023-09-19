const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/';
const roster_url = '/roster';
const playerImg = 'http://nhl.bamcontent.com/images/headshots/current/168x168/';
const playerStats = 'https://statsapi.web.nhl.com/api/v1/people/';
const playerStatModifier = '/stats?stats=statsSingleSeason&season=20222023';
let teamId = '';

let players = 0;

//recalls selected team on that page
teamId = sessionStorage.getItem('teamId');

//fetchs players on that team
async function getPlayers(){

    const response = await fetch(api_url + teamId + roster_url);
    const data = await response.json();
    const teamRoster = data['roster'];

    for (players = 0; players < teamRoster.length; players++) {

        //Api url Extension to pull players stats when selected
        const playerStatSheet = teamRoster[players]['person']['link'];
        const playerId = teamRoster[players]['person']['id'];

        const playerPos = teamRoster[players]['position']['type'];
        const playerName = teamRoster[players]['person']['fullName'];
        const playerNum = teamRoster[players]['jerseyNumber'];

        //fetchs the players photos
        async function getPlayerImg(){

            const response = await fetch(playerImg + playerId + '.jpg');
            const img = await response.blob();
            const imageObjectURL = URL.createObjectURL(img);
            
            const createImg = document.createElement('img');
            createImg.src = imageObjectURL;

            const container = document.getElementById('myImg');
            container.appendChild(createImg);
        }

        async function getPlayerStats(){

            const response = await fetch(playerStats + playerId + playerStatModifier);
            const stats = await response.json();

            const base = stats['stats'][0]['splits'][0]['stat'];

            //stats for skaters
            const goals = ['goals'];
            const assists = ['assists'];
            const points = ['points'];
            const gamesPlayed = ['games'];
            const gameWinningGoals = ['gameWinningGoals'];
            const hits = ['hits'];
            const pim = ['pim'];
            const blockedShots = ['blocked'];
            const plusMinus = ['plusMinus'];
            
            //stats for goalies
            const gamesStarted = ['gamesStarted'];
            const goalsAgainstAverage = ['goalAgainstAverage'];
            const goalsAgainst = ['goalsAgainst'];
            const losses = ['losses'];
            const wins = ['wins'];
            const ot = ['ot'];
            const savePercentage = ['savePercentage'];
            const shutouts = ['shutouts'];            

            console.log(base);
        }

        getPlayerImg();
        getPlayerStats();

    }

    console.log(teamRoster);
}

getPlayers();