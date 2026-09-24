var letras = prompt(['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']);
var dni = prompt("Dame DNI sin letra: ");

if(dni > 0 && dni < 99999999){
    resto = dni%23;
    alert("Tu dni es" + dni + letras[resto]);

}
