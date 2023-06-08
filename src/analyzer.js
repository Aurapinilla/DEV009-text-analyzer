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
    let longitudPalabra = 0
    for (const palabra of text){
      longitudPalabra = longitudPalabra + palabras.length;
    }
    console.log(longitudPalabra)
    return longitudPalabra / palabras.length;
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
    console.log({ text });
    let numeros = text.match(/\d+(\.\d+)?/g);
    console.log({ numeros });
    let suma = 0;
      for (let i = 0; i < numeros.length; i++){
        suma += parseInt(numeros[i]);
      }
    return suma;  
  },
};

export default analyzer;

function isSpaceOrSymbol(caracter){
  const spaceOrSymbols = "!\"#$%&/()=?¡,.-";
  for (const symbolCaracter of spaceOrSymbols){
    const isSymbol = symbolCaracter === caracter;
    if (isSymbol){
      return true;
    }
  }
  return false;  
}


/*function isNumber(caracterN){
  const thisIsNumber = !isNaN;
  return thisIsNumber;
}*/