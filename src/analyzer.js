const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Separa por 1 o más espacios en blanco
    const words = text.trim().split(/\s+/g);
    return words.length

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let characterCount = 0
    for (const character of text){
      if (!isSpaceOrSymbol(character)) 
      {
        characterCount++;
      }
    }
    return characterCount;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/g);
    let wordLength = 0
    for (let i = 0; i < (words.length); i++)
    {
      wordLength += words[i].length;
    }
    return Math.round((wordLength / words.length)*100)/100;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //La variable permite encontrar todos los números
    const words = text.trim().split(/\s+/g);
    let numberCount = 0;
    for (let i = 0; i < (words.length); i++)
    {
      if (!isNaN(words[i]))
      {
        numberCount++;
      }
    }
    return numberCount; 
  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/g);
    let numberCount = 0;
    for (let i = 0; i < (words.length); i++)
    {
      if (!isNaN(words[i]))
      {
        numberCount += parseFloat(words[i]);
      }
    }
    return numberCount; 
    
  },
};

export default analyzer;

function isSpaceOrSymbol(character)
{
  const spaceOrSymbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`¿¡{|}~ ';
  for (const symbolCaracter of spaceOrSymbols)
  {
    const isSymbol = symbolCaracter === character;
    if (isSymbol)
    {
      return true;
    }
  }
  return false;  
}

