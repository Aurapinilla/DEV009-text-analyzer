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
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoLimpio = text.replace( /\s/g, '' );
    return textoLimpio.length; 
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let palabras = text.trim().split(/\s+/);
    let longitud = palabras.reduce((acc, curr) => acc + curr.length, 0);
    return longitud / palabras.length || 0;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //La variable permite encontrar todos los números
    let numeros = text.match(/\d+(\.\d+)?/g);
    return numeros ? numeros.length: 0;
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
