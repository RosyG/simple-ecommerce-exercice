function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="giveEventBtn(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function giveEventBtn(id) {
  let collectionTag = document.getElementsByClassName("btn-primary");
  let tag = Array.from(collectionTag);//Arreglo de botones.
  changeButtonStatus(tag[id],id);//Llamando a la función que cambiará el status, tiene como parametro el botón que se ha oprimido.
}//Fin de función giveEventBtn(id)

function addToCart(button, id) {
  console.log( 'add' );
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
}

function removeFromCart() {
  console.log( 'remove' );
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button,id) {
  let status = button.innerText.toLowerCase();//El status del botón en minúsculas.
  if (status == "agregar a carrito") {
    button.innerText = "Quitar del carrito"
    addToCart( id )
  }else {
    button.innerText = "Agregar a carrito";
    removeFromCart( id )
  }

  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}//Fin de función changeButtonStatus(button, id)
