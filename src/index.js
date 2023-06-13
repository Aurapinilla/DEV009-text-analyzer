import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector('textarea[name = "user-input"]');
const lists = document.querySelectorAll('li');

function textAnalyzer()
{
  const text = document.querySelector('textarea[name = "user-input"]').value;
  if ( text !== "")
  {
    const countWords = "Palabras: " + analyzer.getWordCount(text);
    lists[0].innerHTML = countWords;

    const countCharacters = "Caracteres: " + analyzer.getCharacterCount(text);
    lists[1].innerHTML = countCharacters;

    const charactersNoSpaces = "Caracteres Sin Espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
    lists[2].innerHTML = charactersNoSpaces;

    const countNumbers = "Recuento Números: " + analyzer.getNumberCount(text);
    lists[3].innerHTML = countNumbers;

    const sumNumbers = "Suma Números: " + analyzer.getNumberSum(text);
    lists[4].innerHTML = sumNumbers;

    const averageLength = "Longitud Media Palabras: " + analyzer.getAverageWordLength(text);
    lists[5].innerHTML = averageLength;
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
  document.querySelector('textarea[name = "user-input"]').value = "";
  lists[0].innerHTML = "Palabras: 0";
  lists[1].innerHTML = "Caracteres: 0";
  lists[2].innerHTML = "Caracteres Sin Espacios: 0";
  lists[3].innerHTML = "Recuento Números: 0";
  lists[4].innerHTML = "Suma Números: 0";
  lists[5].innerHTML = "Longitud Media Palabras: 0";
}

resetBtn.addEventListener('click', resetMetrics);
