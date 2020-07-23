var bank = {
  holder: 'Alex',
  balance: 0,

  ingresar: function(valor){
    console.log("Ingresaste " + valor + " pesos");
    this.balance= this.balance + valor;
  }, 

  extraer: function (valor){
    console.log ("Extraiste " + valor + " pesos");
    this.balance = this.balance - valor;
  },
  informar: function(){
    return "Nombre: " + this.holder + " Tu saldo es  " + this.balance;
  }
};

console.log(bank.holder);
console.log(bank.balance);
console.log('------------');
console.log(bank.ingresar(80));
console.log(bank.extraer (20));
console.log(bank.informar()); 


console.log('------------');
console.log('------------');
let number = prompt ('introduzca un número')

for (number = 0; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(number + " es par.");
  } else {
    console.log(number + " es impar.");
  }
}

console.log('------------');
console.log('------------');

  /* Tabla Multiplicar 9 */

  for (var i=1; i<=10; i++) {
    console.log(10 + " x " +  + i + " = " + i * 10);
  }

  var n1,i;
  i=0;
  n1=parseInt(prompt("Número"));

  while (i<=10){
    console.log(+n1+"*"+i+"="+(n1*i));
    i++

  }

  
  
  