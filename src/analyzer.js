const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let texto  = document.getElementById("areatexto").value;
    texto = texto.replace(/\r?\n/g," ");
    texto = texto.replace(/[ ]+/g," ");
    texto = texto.replace(/^ /,"");
    texto = texto.replace(/ $/,"");
    return((texto).split(" ")).length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return (document.getElementById("areatexto").value).length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let texto  = document.getElementById("areatexto").value;
    texto = texto.replace( /\s/g, '' );
    return texto.length; 
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let texto  = document.getElementById("areatexto").value;
    texto = texto.split(' ').filter(String).join('').split('');
    return (texto.filter(num => num >= 0 && num <= 9)).length;  
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  },
};

export default analyzer;
