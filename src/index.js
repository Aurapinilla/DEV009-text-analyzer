import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector("#areatexto");

function textAnalyzer()
{
    const text = document.getElementById("areatexto").value;
    if ( text !== "")
    {
        const countWords = analyzer.getWordCount(text);
        document.getElementById("resultado1").innerHTML = countWords;

        const countCharacters = analyzer.getCharacterCount(text);
        document.getElementById("resultado2").innerHTML = countCharacters;

        const charactersNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
        document.getElementById("resultado3").innerHTML = charactersNoSpaces;

        const countNumbers = analyzer.getNumberCount(text);
        document.getElementById("resultado4").innerHTML = countNumbers;

        const sumNumbers = analyzer.getNumberSum(text);
        document.getElementById("resultado5").innerHTML = sumNumbers;

        const averageLength = analyzer.getAverageWordLength(text);
        document.getElementById("resultado6").innerHTML = averageLength;
    } 
    else 
    {
        resetMetrics();
    }
}
textArea.addEventListener("keyup", textAnalyzer);


const resetBtn = document.querySelector("#reset-button");

function resetMetrics()
{
    document.getElementById("areatexto").value = "";
    document.getElementById("resultado1").innerHTML = "0";
    document.getElementById("resultado2").innerHTML = "0";
    document.getElementById("resultado3").innerHTML = "0";
    document.getElementById("resultado4").innerHTML = "0";
    document.getElementById("resultado5").innerHTML = "0";
    document.getElementById("resultado6").innerHTML = "0";
}

resetBtn.addEventListener('click', resetMetrics);
