const mostrarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  const modalHeader = document.createElement("div");
  modalHeader.className = "mod-header";
  modalHeader.innerHTML = `
      <h2 class="modal-header-title">Carrito</h2>
    `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h2");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "mod-content";
    carritoContent.innerHTML = `
        <img src="img/fotos-libros/${producto.imagen}.jpg">
        <h3>${producto.nombre}</h3>
        <p> $ ${producto.precio}</p>
        <div class="contador-cantidad">
        <span class="restar"> - </span>
        <p>${producto.stock}</p>
        <span class="sumar"> + </span>
        </div>
        <p>Total: $ ${producto.stock * producto.precio} </p>
        <span class="borrar-producto"> <img src="../img/trash.png"></span>
        <hr>
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


  });//cierre foreach productos



  if (carrito.length === 0) {
    const carritoVacio = document.createElement("div");
    carritoVacio.className = "total-content";
    carritoVacio.innerHTML = `El carrito está vacio`;
    modalContainer.append( carritoVacio);
  } else {
    // Si el carrito tiene productos, muestra el  precio total
    const total = carrito.reduce((acc, el) => acc + el.precio * el.stock, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: <b>$ ${total}</b>`;
    modalContainer.append(totalCompra);
  
    // Si el carrito tiene productos, muestra el botón "Comprar"
    const comprarCarrito = document.createElement("button");
    comprarCarrito.className = "comprar-carrito";
    comprarCarrito.innerHTML = `Finalizar compra`;
    modalContainer.append(comprarCarrito);

    modalContainer.querySelector(".comprar-carrito").addEventListener("click", () => {
    localStorage.removeItem('carrito');

      setTimeout(()=>{
        location.reload();
      }, 1300)
      Swal.fire({
        icon: 'success',
        title: 'Tu compra fue exitosa',
        showConfirmButton: false,
        timer: 2000
      })
     
     });



    // Botón para vaciar el carrito
    const vaciarCarritoButton = document.createElement("button");
    vaciarCarritoButton.className = "vaciar-carrito-button";
    vaciarCarritoButton.innerText = "Vaciar Carrito";
  
    vaciarCarritoButton.addEventListener("click", () => {
      // Llamar a la función para vaciar el carrito
      vaciarCarrito();
    });
  
    modalContainer.append(vaciarCarritoButton);
    verCarrito.addEventListener("click", mostrarCarrito);



      const vaciarCarrito = () => {

        localStorage.removeItem("carrito");
        modalContainer.innerHTML = "";
       
        modalContainer.append(modalHeader);
        
        // Muestra el mensaje "El carrito está vacío"
        const carritoVacio = document.createElement("div");
        carritoVacio.className = "total-content";
        carritoVacio.innerHTML = `El carrito está vacío`;
        modalContainer.append(carritoVacio);
         

        const modalcerrarbutton = document.createElement("button");
        modalcerrarbutton.innerText = "volver";
        modalcerrarbutton.className = "cerrar-modal";
        modalContainer.append(modalcerrarbutton);
        modalcerrarbutton.addEventListener("click", () => {
          location.reload();
        });
       
      };


   }//cierra else


   
};//cierre const mostrarcarrito

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



