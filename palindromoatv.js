//Um palíndromo é uma palavra, frase, número ou sequência de caracteres que permanece 
//a mesma quando lida de trás para frente. Em outras palavras, 
// é algo que mantém sua forma original, independentemente da direção em que é lido.


// Importa o módulo 'readline' para ler entrada do usuário via teclado
const readline = require('readline');

// Cria uma interface de leitura e escrita usando o 'readline'
const rl = readline.createInterface({
  input: process.stdin,   // Define a entrada como o teclado
  output: process.stdout  // Define a saída como o console
});

// Função que verifica se uma string é um palíndromo
function isPalindrome(str) {
  // Remove caracteres especiais, espaços e transforma a string em minúsculas
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
  
  // Divide a string em um array de caracteres, inverte o array e junta novamente em uma string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Compara a string original com a string invertida para verificar se é um palíndromo
  return cleanedStr === reversedStr;
}

// Pede ao usuário para digitar uma palavra
rl.question('Digite uma palavra: ', (word) => {
  // Chama a função isPalindrome para verificar se a palavra é um palíndromo
  if (isPalindrome(word)) {
    console.log(`${word} é um palíndromo.`); // Se for um palíndromo, exibe esta mensagem
  } else {
    console.log(`${word} não é um palíndromo.`); // Se não for um palíndromo, exibe esta mensagem
  }
  
  // Fecha a interface de leitura e escrita
  rl.close();
});
