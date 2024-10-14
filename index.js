// Importa o pacote prompt-sync, para funcionar a função prompt
// nos navegadores em ambiente Node.js
const prompt = require('prompt-sync')();


let nomeDoHeroi = prompt("Informe o nome do seu Heroi: ");
let xp = parseInt(prompt("Digite a quantidade de XP do herói: "));
let nivelDoXp = "";  // Variável para armazenar o nível

switch (true) {
    case (xp < 1000):
        nivelDoXp = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivelDoXp = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivelDoXp = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivelDoXp = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivelDoXp = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivelDoXp = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivelDoXp = "Imortal";
        break;
    case (xp >= 10001):
        nivelDoXp = "Radiante";
        break;
    default:
        // Caso a entrada seja diferente de um numero
        nivelDoXp = "Nível Desconhecido"; 
}


console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoXp}.`);
