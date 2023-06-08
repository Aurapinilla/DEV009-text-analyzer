import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector("#areatexto");

function textAnalyzer(){
    const text = document.getElementById("areatexto").value;
    const contarPalabras = analyzer.getWordCount(text);
    document.getElementById("resultado1").innerHTML = contarPalabras;

    const contarCaracteres = analyzer.getCharacterCount(text);
    document.getElementById("resultado2").innerHTML = contarCaracteres;


    const contarCaracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(text);
    document.getElementById("resultado3").innerHTML = contarCaracteresSinEspacios;
    
    const contarNumeros = analyzer.getNumberCount(text);
    const sumarNumeros = analyzer.getNumberSum(text);
    const promedioLongitud = analyzer.getAverageWordLength(text);

    
    document.getElementById("resultado4").innerHTML = contarNumeros;
    document.getElementById("resultado5").innerHTML = sumarNumeros;
    document.getElementById("resultado6").innerHTML = promedioLongitud;
}
textArea.addEventListener("keyup", textAnalyzer);


const resetBtn = document.querySelector("#reset-button");

function borrarMetricas(){
    document.getElementById("areatexto").value = "";
    document.getElementById("resultado1").innerHTML = "0";
    document.getElementById("resultado2").innerHTML = "0";
    document.getElementById("resultado3").innerHTML = "0";
    document.getElementById("resultado4").innerHTML = "0";
    document.getElementById("resultado5").innerHTML = "0";
    document.getElementById("resultado6").innerHTML = "0";
}

resetBtn.addEventListener('click', borrarMetricas);
