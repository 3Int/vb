

function randomizeTeams() {
    let teamCount = 2;
    if(document.getElementById("threeTeams").checked){
        teamCount = 3;
    }
    if(document.getElementById("nTeams").checked){
        teamCount = document.getElementById("nTeamsTextField").value;
    }
    const outputField = document.getElementById("teamOutput");
    let textinput = document.getElementById("playerNames").value;
    let names = textinput
        .split('\n')
        .map(function(str){return str.trim();})
        .filter(function(str){return str}); // boolean interpretation is same as non-empty
    // remove duplicates by using a Set
    names = [...new Set(names)];
    
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
        textinput += `Team${i+1}(${teams[i].length}) :${teamtotext(teams[i])} <br>`;
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

function textchangelistener(){
    let elem = document.getElementById("nTeamsTextField");
    if(this.checked && this.id ==  "nTeams"){
        elem.style.display = "block";
    }
    else {
        elem.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    buttons = document.querySelectorAll("input[type='radio']");
    buttons.forEach((x) => x.addEventListener("change", textchangelistener));
});
