import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const campoTexto = document.querySelector("#areatexto");


function textAnalyzer(){
    const texto = document.getElementById("areatexto").innerHTML;
    const contarPalabras = analyzer.getWordCount(texto);
    const contarCaracteres = analyzer.getCharacterCount(texto);
    const contarCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(texto);
    const contarNumeros = analyzer.getNumberCount(texto);
    const sumarNumeros = analyzer.getNumberSum(texto);

    document.getElementById("resultado1").innerHTML = contarPalabras;
    document.getElementById("resultado2").innerHTML = contarCaracteres;
    document.getElementById("resultado3").innerHTML = contarCaracteresSinEspacios;
    document.getElementById("resultado4").innerHTML = contarNumeros;
    document.getElementById("resultado5").innerHTML = sumarNumeros;
}
console.log(campoTexto.addEventListener("keyup", textAnalyzer));


const resetBtn = document.querySelector("#reset-button");

function borrarMetricas(){
    document.getElementById("areatexto").value = "";
    document.getElementById("resultado1").innerHTML = "0";
    document.getElementById("resultado2").innerHTML = "0";
    document.getElementById("resultado3").innerHTML = "0";
    document.getElementById("resultado4").innerHTML = "0";
}

resetBtn.addEventListener('click', borrarMetricas);

