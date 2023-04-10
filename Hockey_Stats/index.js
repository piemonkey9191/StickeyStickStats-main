const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/';
let teamId = "";

teamId = sessionStorage.getItem('teamId');

//fetchs info for teams  on indvidual pages
async function getTeams() {

    //Variables that get the data from JSON File and assign it an object
    const response = await fetch(api_url + teamId);
    const data = await response.json();
    const teamName = data['teams'][0]['name'];
    const stadium = data['teams'][0]['venue']['name'];

    //sends data from object to HTML file
    document.getElementById("name").innerHTML = teamName;
    document.getElementById("stadium").innerHTML = stadium;

    //console.log(data); for debug

};

getTeams();