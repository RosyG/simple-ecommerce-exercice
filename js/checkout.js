console.log('checkout.js');

let tableCheck = document.querySelector('#table-checkout');//Elemento al que se le pintará la cuenta los productos agregados.

function calculateTotal() {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
}


let strProduct = localStorage.getItem('product');
console.log(strProduct);
let arrayProducts = strProduct.split("},{");
console.log(arrayProducts);
arrayProducts[0] = arrayProducts[0].substring(2);
console.log(arrayProducts[0]);
let iEnd = arrayProducts.length-1;
arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
console.log(arrayProducts);
let jsonProduc = JSON.parse(strProduct);
console.log(jsonProduc);
/*
for (strObjProduct of arrayProducts) {
  console.log(jsonProduc);
}
*/
//product= JSON.parse(product)



// localStorage.setItem('usuario', JSON.stringify(usuario)
// var usuario = localStorage.getItem('usuario');
// usuario= JSON.parse(usuario)
// console.log(usuario);



/*
arreglo de todos los productos agregados: [obj1, obj]
for (var i = 0; i < array.length; i++) {
  array[i]
}
forEach( obj[i].
name
price
localStorage.setItem('name',name);
localStorage.setItem('imgUs',price);

)
*/
