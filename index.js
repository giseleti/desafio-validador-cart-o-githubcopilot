// Teste direto no terminal
const exemplos = [
    '4111 1111 1111 1111', // Visa
    '5500 0000 0000 0004', // MasterCard
    '4011 1234 5678 9012', // Elo
    '3714 496353 98431',   // American Express
    '6011 0009 9013 9424', // Discover
    '6062 8288 8866 6688', // Hipercard
    '1234 5678 9012 3456'  // Desconhecida
];

const identificarBandeira = require('./identificarBandeira');

exemplos.forEach(numero => {
    console.log(`Cartão: ${numero} => Bandeira: ${identificarBandeira(numero)}`);
});