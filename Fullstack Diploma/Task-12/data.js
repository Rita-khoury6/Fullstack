const team = { 
    name: "Egypt",
    coach: { name: "Hossam Hassan", nationality: "Egyptian" },
    stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 }, 
    colors: ["red", "white", "black"],
    founded: 1921,
     };
const players = [ 
    { id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 },
    { id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 },
    { id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 },
    { id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 },
    { id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 7 },
    { id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 0 },
    ];
const matches = [
    { opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] },
    { opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] },
    { opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] },
 ];
const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"]; 
const settings = { theme: "light", language: "ar", notifications: true };

//////////////////////////////////////////////////////////////
const{name,founded}=team;
console.log(name,founded);
const{coach:{name:coachName}}=team;
console.log(coachName);
const{stadium:{city,capacity}}=team;
console.log(city,capacity);
const{colors:[first,second]}=team;
console.log(first,second);
const{colors:[, ,third]}=team;
console.log(third);
const{nickname="The Pharaohs"}=team;
console.log(nickname);
const [player]=players;
console.log(player);
const{name:playerName,goals}=player;
console.log(playerName,goals);
const[firstplayer,...others]=players;
console.log(others);
const{opponent,score:[home,away]}=matches[0];
console.log(opponent,home,away);
for(match of matches){
    console.log(`Egypt ${home} - ${away} Ghana`)
}  const{name:player1name,position,number}=players[0];
for(player1 of players){
  
    console.log(`#${number} ${player1name}-${position}`);
}
const playersname=players.map(player=>player.name);
console.log(playersname);
function printPlayer({name,age,position}){
    console.log(`name :${name} ,Age:${age} ,Position${position}`)
};
players.forEach(player=>printPlayer(player));
function deScribe({name,position="unknown"}){
    console.log(`Name: ${name} ,Position :${position} `)
};
deScribe({name:"New Player"});
const allPlayers=[...players.map(p=>p.name),...bench];
console.log(allPlayers);
const newColors=[...team.colors ,"gold"];
console.log(newColors);
const newSettings={...settings ,theme:"dark"};
console.log(newSettings);
const teamCopy={...team,founded:'1920'};
console.log(teamCopy);
console.log(settings,team);
const star={...players[0],captain:true};
console.log(star);
const player1copy={...players[1],goals:players[1].goals +1};
console.log(player1copy);
const{notifications,...basic}=settings;
console.log(basic);
const{id,...info}=players[0];
console.log(info);
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
const totalGoals = sum(...players.map(p => p.goals));
const maxGoals = (...numbers) => Math.max(...numbers);
const highestAge = Math.max(...players.map(p => p.age));
const addPlayers = (currentTeam, ...names) => [currentTeam.name, ...names];
const addPlayersList = (teamObj, ...names) => [...players.map(p => p.name), ...names];
const copy = team;
copy.name = "Ghana";
console.log(team.name); 
const copy2 = { ...team };
copy2.stadium.city = "Giza";
console.log(team.stadium.city);
const copys = structuredClone(team);
copy2.stadium.city = "Giza";
console.log(team.stadium.city);"Cairo";
console.log(players[0] === players[0]); // true
const incAge = (player) => ({ ...player, age: player.age + 1 });
const salahGoalsCount = 
matches.reduce((total, match) => {
     return total + match.goals.filter(scorer => scorer === "Salah").length;
},0);
console.log(salahGoalsCount);
const matchResults = matches.reduce((acc, match) => {
    const [egyptScore, opponentScore] = match.score;
    if (egyptScore > opponentScore) acc.wins++;
    else if (egyptScore === opponentScore) acc.draws++;
    else acc.losses++;
    return acc;
}, { wins: 0, draws: 0, losses: 0 });
console.log(matchResults);