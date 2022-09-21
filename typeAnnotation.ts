
//[TYPE ANNOTATION]
let nome: string = 'Kaio';
console.log(nome);

let animais: string[] =['elefante', 'gato', 'cavalo']
console.log(animais)
//Objetos [TYPE ANNOTATION]
let carro:{
nome: string;
ano: number;
preco: number;

}
carro = {nome: 'Palio', ano: 2020, preco: 12.000}
 console.log(carro)

 function mult(num1:number, num2:number){

    return num1 * num2
 }
 console.log(mult(12, 15))