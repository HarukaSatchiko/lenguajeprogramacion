let frase = "Hello world";

let indice = 0;
let res = "";

while (indice < frase.length) {
    if (frase[indice]== " "){
        console.log("Encontro espacio");
        break;
    }
    res = res.concat(frase[indice]);
    indice ++;
}

console.log(res);