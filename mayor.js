// Declaramos variables
var varA =0;
var varB =0;
var varC =0;


// Damos valor a las variables 

varA = parseInt ( prompt("Ingresa valor variable") );
varB = parseInt ( prompt("Ingresa valor variable") );
varC = parseInt ( prompt("Ingresa valor variable") );

if (varA > varB & varA > varC){
        console.log(varA);
    }
    else{
        if((varB > varA) && (varB > varC)) {
            console.log(varB);
    }
    else{
        console.log(varC);
    }
}