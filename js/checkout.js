console.log('checkout.js');

let tableCheck = document.querySelector('#table-checkout');//Elemento al que se le pintará la cuenta los productos agregados.

function calculateTotal() {
  //como le hacemos para extraer toda
  //de cantidades de los elementos
  //en mi carrito
}


let strProduct = localStorage.getItem('product');
console.log(strProduct);

let arrayProducts = strProduct.split(",");
for ( strObjProduc of arrayProducts) {
  console.log(strObjProduc);
  //let objProduc = JSON.parse(strObjProduc);
  //console.log(objProduc);
}

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
