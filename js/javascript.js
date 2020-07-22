let number = prompt ('introduzca un número')

for (number = 0; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(number + " es par.");
  } else {
    console.log(number + " es impar.");
  }
}

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