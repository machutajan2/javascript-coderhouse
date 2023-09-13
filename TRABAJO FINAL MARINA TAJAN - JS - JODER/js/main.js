const listadoProductos = document.getElementById("listadoProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para cargar productos desde el archivo JSON

const cargarProductosDesdeJSON = async () => {
  try {
    const response = await fetch("js/productos.json");
    productos = await response.json();

    // Asegúrate de que productos se haya cargado correctamente
    console.log(productos);

    mostrarProductos(productos);
  } catch (error) {
    console.error("Error al cargar productos desde JSON:", error);
  }
};


const mostrarProductos = (productos) => {
productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "item-producto col-6 col-lg-3 col-md-6";
  content.innerHTML = `
    <img src="img/fotos-libros/${producto.imagen}.jpg">
    <h3>${producto.nombre}</h3>
    <p>${producto.autor}</p>
    <p class="precio">$${producto.precio} </p>
  `;

  listadoProductos.append(content);

  // btn comprar
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
      Toastify({
        text: "Producto añadido al carrito",
        className: "info",
        close: true,
        style: {
          background: "#5db3a1",
          border: "1px solid #fff",
          color: "#000",
        }
      }).showToast();
    } else {
      carrito.push({
        id: producto.id,
        imagen: producto.imagen,
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
      });
      Toastify({
        text: "Producto añadido al carrito",
        className: "info",
        close: true,
        style: {
          background: "#5db3a1",
          border: "1px solid #fff",
          color: "#000",
        }
      }).showToast();
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      guardarCarritoLS();

    }// Fin else
  
  });
});
};

cargarProductosDesdeJSON();



// GUARDAR CARRITO

const guardarCarritoLS = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};



// FILTRADO DE PRODUCTOS



const filtroPrecioInput = document.getElementById("filtroPrecio");
const filtroPalabraInput = document.getElementById("filtroPalabra");
const aplicarFiltroPrecioButton = document.getElementById("aplicarFiltroPrecio");
const aplicarFiltroPalabraButton = document.getElementById("aplicarFiltroPalabra");
const borrarFiltrosButton = document.getElementById("borrarFiltros");

//  filtrar por precio
function filtrarPorPrecio(productos, precioMaximo) {
  return productos.filter((producto) => producto.precio <= precioMaximo);
}

// filtrar por palabra 
function filtrarPorPalabraClave(productos, palabraClave) {
  palabraClave = palabraClave.toLowerCase();
  return productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(palabraClave) ||
      producto.autor.toLowerCase().includes(palabraClave)
    );
  });
}

// mostrar  resultados
function mostrarResultados(resultados) {
  listadoProductos.innerHTML = "";
  resultados.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "item-producto col-3";
    content.innerHTML = `
      <img src="img/fotos-libros/${producto.imagen}.jpg">
      <h3>${producto.nombre}</h3>
      <p>${producto.autor}</p>
      <p class="precio">$${producto.precio} </p>
    `;
  
    listadoProductos.append(content);
  
    // btn comprar
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
        Toastify({
          text: "Producto añadido al carrito",
          className: "info",
          close: true,
          style: {
            background: "#5db3a1",
            border: "1px solid #fff",
            color: "#000",
          }
        }).showToast();
      } else {
        carrito.push({
          id: producto.id,
          imagen: producto.imagen,
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock,
        });
        Toastify({
          text: "Producto añadido al carrito",
          className: "info",
          close: true,
          style: {
            background: "#5db3a1",
            border: "1px solid #fff",
            color: "#000",
          }
        }).showToast();
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        guardarCarritoLS();
  
      }
      
    });
  });
}

aplicarFiltroPrecioButton.addEventListener("click", () => {
  const precioMaximo = parseFloat(filtroPrecioInput.value);
  if (productos) {
    const resultadosPrecio = filtrarPorPrecio(productos, precioMaximo);
    mostrarResultados(resultadosPrecio);
  }
});

aplicarFiltroPalabraButton.addEventListener("click", () => {
  const palabraClave = filtroPalabraInput.value;
  if (productos) {
    const resultadosPalabra = filtrarPorPalabraClave(productos, palabraClave);
    mostrarResultados(resultadosPalabra);
  }
});


borrarFiltrosButton.addEventListener("click", () => {
  filtroPrecioInput.value = "";
  filtroPalabraInput.value = "";
  cargarProductosDesdeJSON();
});
