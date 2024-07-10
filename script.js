

function randomizeTeams() {
    let teamCount = 2;
    if(document.getElementById("threeTeams").checked == true){
        teamCount = 3;
    }
    const outputField = document.getElementById("teamOutput");
    let textinput = document.getElementById("playerNames").value;
    let names = textinput.split('\n').map(function(str){return str.trim();});
    
    teams = Array.from({ length: teamCount }, () => []);
    playersPerTeam = Math.floor(names.length / teamCount);

    let nameslen = names.length;
    iterator = iter(teams);
    for(let i =0; i < nameslen; i++){
        index = Math.floor(Math.random()* names.length);
        n = names[index]; 
        names.splice(index,1);
        team = iterator.next().value;
        team.push(n);

    }
    
    outputField.innerHTML = teamstotext(teams)
}
function teamstotext(teams){
    textinput = "";
    for(let i =0; i < teams.length; i++){
        textinput += "Team"+ (i+1)+ ": "+ teamtotext(teams[i]) + " <br>";
    }
    return textinput;
}

function teamtotext(team){
    return team;
}

function* iter(list){
    let index = 0;
    while(true){
        yield list[index % list.length];
        index++;
    }
}