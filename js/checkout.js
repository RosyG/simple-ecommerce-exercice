

window.onload = () => {
  getObjLocalStorage();//LLamando la inf almacenada en localStorage.
}


function calculateTotal(array) {
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += product.price;
  }
  return priceTotal;
}

function getObjLocalStorage () {
let strProduct = localStorage.getItem('product');
let arrayProducts = strProduct.split("},{");
arrayProducts[0] = arrayProducts[0].substring(2);
let iEnd = arrayProducts.length-1;
arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
let jsonProduc = JSON.parse(strProduct);//Arreglo obtenido de localStorage.
console.log(jsonProduc);
paintCheckout(jsonProduc);
let total = calculateTotal(jsonProduc);
paintTotal (total);
console.log(total);

}//fin de función getObjLocalStorage()

function paintTotal (total) {
  let tableResult = document.querySelector('#table-result');//Elemento al que se le pintará la cuenta los productos agregados.

  let templateResult = `<tr>

    <td>${total}</td>
  </tr>`
  tableResult.innerHTML = templateResult;

  console.log(total);
}

function paintCheckout (array) {
  let tableCheck = document.querySelector('#table-checkout');//Elemento al que se le pintará la cuenta los productos agregados.
  let templateProduct = '';

  for (product of array) {
      templateProduct += `
      <tr>
        <th scope="row">${product.title}</th>
        <td>${product.price}</td>
      </tr>
        `;
  }

  let total =4000;
  let templateComplet = `
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>

  ${templateProduct}
  <tr>
    <td></td>
    <td></td>

  </tr>

  </tbody>
          `;

  tableCheck.innerHTML = templateComplet;
}//fin de función paintCheckout(array).
