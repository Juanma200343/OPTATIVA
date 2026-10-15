type Ranking = [number,string,boolean]

let position : number = 3
let playerName : string = "Juanma"
let finishedGame : boolean = false

let informacionjugador : Ranking = [position,playerName,finishedGame];
let hallOfRanking : Array<Ranking>= [] 


let jugador1 : Ranking = [1,"Jugador 1",true]
let jugador2 : Ranking = [2,"Jugador 2",false]


hallOfRanking.push(informacionjugador);

function printRankings(array: Array<Ranking>): Array<Ranking>{
    return array;
}
console.log(printRankings(hallOfRanking))