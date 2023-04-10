const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/24';

async function getTeams(){

  const response = await fetch(api_url);
  const data = await response.json();
  const {name} = data;

  console.log(data);
}

getTeams();