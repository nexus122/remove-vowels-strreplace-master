function removeVowels(frase) {
    // Implementar código aquí
   // Obligatorio: utilizar una expresión regular y el método de string "replace": https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    const pattern = /[aeiouáéíóúàèìòù]{1}/ig;

    return frase.replaceAll(pattern,"");
}

console.log(removeVowels('codewars')); // --> cdwrs
console.log(removeVowels('holahOlaáa')); // -->hlhl