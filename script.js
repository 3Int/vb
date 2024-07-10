

function randomizeTeams() {
    let numberSelected = 2;
    if(document.getElementById("threeTeams").checked == true){
        numberSelected = 3;
    }
    const outputField = document.getElementById("teamOutput");
    let text = document.getElementById("playerNames").value;
    let nameList = text.split('\n').map(function(str){return str.trim();});
    let nameListCopy = [...nameList];
    
    let playerNumbers = nameList.length;
    let playerPerTeam = 0;
    if(numberSelected === 2){
        playerPerTeam = Math.floor(playerNumbers/numberSelected);
        
        let team1 = [];
        let team2 = [];
        for(let i = 0; i<playerPerTeam;i++){
            let rndm = Math.floor(Math.random()*nameList.length);
            let repeat = false;
            if(!(rndm in nameListCopy)){
                    repeat = true;
                    i = i-1;
                }
            if(!repeat){
                team1.push(nameList[rndm]);
                delete nameListCopy[rndm];
            }
        }
        
        for(let i = 0; i<playerNumbers;i++){
            if(i in nameListCopy){
                team2.push(nameList[i]);
            }
        }
        let outputText = "Team1: " + team1 + "<br>" + "Team2: " + team2

        outputField.innerHTML = outputText;
    }else if(numberSelected ===3){
        playerPerTeam = playerNumbers/numberSelected;
        let team1 = [];
        let team2 = [];
        let team3 = [];
        for(let i = 0; i<playerPerTeam;i++){
            let rndm = Math.floor(Math.random()*nameList.length);
            let repeat = false;
            if(!(rndm in nameListCopy)){
                    repeat = true;
                    i = i-1;
                }
            if(!repeat){
                team1.push(nameList[rndm]);
                delete nameListCopy[rndm];
            }
        }
        playerPerTeam = Math.floor((playerNumbers-playerPerTeam)/2);
        for(let i = 0; i<playerPerTeam;i++){
            let rndm = Math.floor(Math.random()*nameList.length);
            let repeat = false;
            if(!(rndm in nameListCopy)){
                    repeat = true;
                    i = i-1;
                }
            if(!repeat){
                team2.push(nameList[rndm]);
                delete nameListCopy[rndm];
            }
        }
        for(let i = 0; i<playerNumbers;i++){
            if(i in nameListCopy){
                team3.push(nameList[i]);
            }
        }
        let outputText = teamstotext([team1, team2, team3])

        outputField.innerHTML = outputText;
    }


    
}
function teamstotext(teams){
    text = "";
    for(let i =0; i < teams.length; i++){
        text += "Team{i+1}: "+ teamtotext(teams[i]) + " <br>";
    }
    return text;
}

function teamtotext(team){
    return team;
}