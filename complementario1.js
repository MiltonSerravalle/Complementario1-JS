let number = parseInt(prompt("Ingrese un numero."));

while(number !=0 && number != NaN){
    if(number%2==0){
        alert(`El numero ${number} es par.`);
    }
    else{
        alert(`El numero ${number} es impar.`);
    }
    number=parseInt(prompt("Ingrese un numero."));
}