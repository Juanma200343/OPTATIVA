
type Ranking = [number, string, boolean];

let position: number = 3;
let playerName: string = "Juanma";
let finishedGame: boolean = false;

let ranking: Ranking = [position, playerName, finishedGame];

let hallOfRanking: Array<Ranking> = [];

// Creamos los rankings de los dos jugadores
let jugador1: Ranking = [1, "Jugador 1", true];
let jugador2: Ranking = [2, "Jugador 2", false];

// Añadimos los tres rankings al array
hallOfRanking.push(ranking);
hallOfRanking.push(jugador1);
hallOfRanking.push(jugador2);

// Función que imprime los rankings por consola
function printRankings(array: Array<Ranking>): void {
    for (let ranking of array) {
        console.log(ranking);
    }
}

// Llamo a la función
printRankings(hallOfRanking);
