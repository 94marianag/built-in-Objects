//Built-in Objects exercises.

/*---------- String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/ 

/*------------------------------ Solución ------------------------------------------- */
function myFunc(cadena){
    console.log(cadena.length)
}
myFunc("Había una vez un barco chiquito");

/*----------------------------------------------------------------------------------- */



/*---------- Number ----------*/
/*
crear una función que reciba un number, que haga lo siguiente:
* Determinar si el numero recibido es un número entero.
* En caso de ser entero, hacer un console.log avisando que es un entero. 
* En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.

Ex:
myFunc(number);
posibles casos:
a) el número es un entero :3
b) el número ahora es un entero con valor de (valor) ;)
*/ 

/*------------------------------ Solución ------------------------------------------- */

function myFunc(numero){
    if(Number.isInteger(numero)){
      console.log(numero + 'es un entero');
    }
    else{
      console.log("El numero ahora es un entero con valor de " + Number.parseInt(numero));
    }
  }
 myFunc(3.4);

/*----------------------------------------------------------------------------------- */



/*---------- Boolean ----------*/
/*
Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
* El numero de caracteres que representan el valor del boolean recibido.

Ex:
var flag = true;
myFunc(flag);
expected result:  4 caracteres.
*/

/*------------------------------ Solución ------------------------------------------- */
function myFunc(boolean){
  console.log(boolean.toString().length)
}
myFunc(true);

/*----------------------------------------------------------------------------------- */



/*---------- Object ----------*/
/*
crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
* El numero de propiedades que contiene el objeto.
* El nombre de cada una de las propiedades del objeto.
* El valor de cada una las propiedades del objeto.

Ex:
myFunc(obj);
*/ 

/*------------------------------ Solución ------------------------------------------- */
let usuario = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123"
}

function  myFunc(objeto){
    console.log(Object.keys(usuario).length, Object.keys(usuario), Object.values(usuario))
}
myFunc(usuario);
/*----------------------------------------------------------------------------------- */



/*---------- Function ----------*/
/*
Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
* El número de argumentos que espera la funcion.

Ex:
var sum = new Function('a','b','c', 'return a + b + c');

myFunc(sum);
result: 3.
*/ 

/*------------------------------ Solución ------------------------------------------- */
var sum = new Function('a','b','c', 'return a + b + c');
function myFunc(fn){
  console.log(fn.length);
}
myFunc(sum);


/*----------------------------------------------------------------------------------- */



/*---------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:

var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 

/*------------------------------ Solución ------------------------------------------- */

let fruits = ["Banana", "Apple"];

function myFunc(array, desiredLength, template) {
 
  let diferencia = desiredLength - array.length;

  if(diferencia === 1){
    array.push(template);
    console.log(array)
  }
else if (diferencia > 1){
  console.log("El array es mayor por: " + Math.abs(diferencia))
}
 
else{
  console.log("El array es menor por: " + Math.abs(diferencia))
}
}
myFunc(fruits, 3, "apple");

/*----------------------------------------------------------------------------------- */



/*---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.

myFunc();
*/

/*------------------------------ Solución ------------------------------------------- */
function date(){
  var today = new Date();
  console.log(today.toISOString());
  console.log(Date.now());
  }
  date();


/*----------------------------------------------------------------------------------- */



/*---------- Math ----------*/
/*
Crear una función que reciba dos numeros (base y exponente). 
la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
determinada por exponente, al final mostrar este resultado usando console.log.

Ex:

myFunc(-3, 2) 
result = 9;
*/

/*------------------------------ Solución ------------------------------------------- */
function myFunc(base, exponente) {
  var absoluto = Math.abs(base);
  console.log(Math.pow(absoluto, exponente));
}
myFunc(-3, 2);

/*----------------------------------------------------------------------------------- */



/*---------- RegExp ----------*/
/*
Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
* Determine si str cumple con el patrón.
* Si cumple, remplazar el las incidencias del patron con el valor de template.
* Mostar el resultado usando console.log.
* Si no, mostrar un mensaje de no coincidencia usando console.log

Ex:
myFunc(str, template)
*/

/*------------------------------ Solución ------------------------------------------- */
var rg = new RegExp(/([A-Z])/);
function regex(str, template) {
    if (rg.test(str)) {
        newstring = str.replace(rg, template);
        console.log(newstring);
        return;
    }
    console.log("No encuentro coincidencias");
}
regex("nombre", "Ja");

/*----------------------------------------------------------------------------------- */



/*---------- Error ----------*/
/*
Crear una funcion que reciba un numero.
*Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
*Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.

Ex: myFunc(number)
*/

/*------------------------------ Solución ------------------------------------------- */

function myFunc(number){
  if (number <= 10){
      console.log("El valor esta dentro de los parametros");
      return
  }
  throw new Error("El valor esta fuera de los parametros");
}
myFunc(8);

/*----------------------------------------------------------------------------------- */


/*---------- Extra (más no opcional) ----------*/
/*
Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
entre los proyectos finales que tienen asignados.

Describir el caso: Crear una función que reciba un array de objects de estaciones de radio, 
que al ser llamada haga un console.log mostrando:
* La cantidad de estaciones
* El valor de de id y titulo de estacion.

Ex:
myFunc(obj);

Mostrar la solucíon en código:
*/
let estaciones = [{
  id: 1,
  title: "La mejor estacion de Pop",
  description: "musica pop",
  genre: "pop",
  created_at: Date,
},
{
  id: 2,
  title: "Solo Rock",
  description: "La mejor musica de rock",
  genre: "rock",
  created_at: Date,
},
{
  id: 3,
  title: "Viejitas pero bonitas",
  description: "Musica oldie pero no tanto",
  genre: "disco",
  created_at: Date,
}]

function  myFunc(arrayObjetos){
console.log(arrayObjetos.length)
console.log(Object.values(estaciones))
}
myFunc(estaciones);

