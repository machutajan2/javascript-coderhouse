const listadoProductos = document.getElementById("listadoProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "item-producto";
  content.innerHTML = `
    <img src="img/fotos-libros/${producto.imagen}.jpg">
    <h3>${producto.nombre}</h3>
    <p>${producto.autor}</p>
    <p class="precio">$${producto.precio} </p>
  `;

  listadoProductos.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "btn-Comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === producto.id) {
          prod.stock++;
        }
      });
    } else {
      carrito.push({
        id: producto.id,
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      guardarCarritoLS();
    }
  });
});


const guardarCarritoLS = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

