const mostrarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito</h1>
    `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="img/fotos-libros/${producto.imagen}.jpg">
        <h3>${producto.nombre}</h3>
        <p> $ ${producto.precio}</p>
        <span class="restar"> - </span>
        <p>${producto.stock}</p>
        <span class="sumar"> + </span>
        <p>Total: $ ${producto.stock * producto.precio} </p>
        <span class="borrar-producto"> ❌ </span>
      `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (producto.stock !== 1) {
        producto.stock--;
      }
      guardarCarritoLS();
      mostrarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      producto.stock++;
      guardarCarritoLS();
      mostrarCarrito();
    });

    let eliminar = carritoContent.querySelector(".borrar-producto");

    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });

  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.stock, 0);

  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `Total a pagar: <b>$ ${total}</b>`;
  modalContainer.append(totalCompra);

  ///falta ->  ELIMINAR CARRITO
 

};

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  guardarCarritoLS();
  mostrarCarrito();

};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();




