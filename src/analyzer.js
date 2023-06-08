const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // let texto  = document.getElementById("areatexto").value;
    //Reemplaza varios espacios en blanco por 1
    const palabras = text.trim().split(/\s+/g);
    return palabras.length
    //Quita el primer espacio en blaco

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let cuentaCaracteres = 0
    for (const caracter of text){
      cuentaCaracteres++;
    }
    return cuentaCaracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let cuentaCaracteres = 0
    for (const caracter of text){
      if (!isSpaceOrSymbol(caracter)) {
        cuentaCaracteres++;
      }
    }
    return cuentaCaracteres;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(/\s+/g);
    let wordLength = 0
    for (let i = 0; i < (palabras.length); i++){
      wordLength = wordLength + palabras[i].length;
      console.log("palaras: ", palabras)
    }
    return Math.round((wordLength / palabras.length)*100)/100;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //La variable permite encontrar todos los números
    const palabras = text.trim().split(/\s+/g);
    let cuentaNumeros = 0;
    for (let i = 0; i < (palabras.length); i++){
      if (!isNaN(palabras[i])){
        cuentaNumeros++;
      }
    }
    return cuentaNumeros; 
  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(/\s+/g);
    let cuentaNumeros = 0;
    for (let i = 0; i < (palabras.length); i++){
      if (!isNaN(palabras[i])){
        cuentaNumeros = cuentaNumeros + parseInt(palabras[i]);
      }
      }
    return cuentaNumeros; 
    
  },
};

export default analyzer;

function isSpaceOrSymbol(caracter){
  const spaceOrSymbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`¿¡{|}~ ';
  for (const symbolCaracter of spaceOrSymbols){
    const isSymbol = symbolCaracter === caracter;
    if (isSymbol){
      return true;
    }
  }
  return false;  
}


