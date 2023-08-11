/* 
e-commerce Libros
*/


const productos = [
  { nombre: "La carretera", autor:"Mccarthy, Cormac", editorial:" Random House", precio: 4899 , stock: 10 },
  {  nombre: "El Viento Conoce Mi Nombre", autor:"Isabel Allende", editorial:"Suudamerica", precio: 9999, stock: 10 },
  {  nombre: "Este dolor no es mío", autor:"Mark Wolynn", editorial:"Gaia Ediciones",  precio: 3050, stock: 10 },
  { nombre: "El Amor Es Imposible", autor:"Dario Sztajnszrajber", editorial:"Paidos",  precio: 6413, stock: 10 },
];



function mostrarProductos(){
  let divt = document.createElement("div");divt.innerHTML = `<h2>Estos son todos nuestros Libros</h2>`;
    document.body.append(divt);

  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="item-producto">
      <h3> ${producto.nombre}</h3>
      <p>Autor: ${producto.autor}</p>
      <p>Editorial: ${producto.editorial}</p>
      <b>$${producto.precio}</b>
      <hr />
      </div>
    `;
    document.body.append(div);
  });
}


function filtrarNombre(){
  let nombre = prompt("Ingrese el nombre del libro a consultar");
  let producto;
  
  for (const item of productos) {
    if (item.nombre === nombre) {
      producto = item;
    }
  }
  if (producto) {
    let mensaje = `
      Nombre: ${producto.nombre}
      $${producto.precio}
    `;
    alert(mensaje);
  } else {
    alert("El libro no se ha encontrado en la lista");
    mostrarProductos()
  }
}


function filtrarPrecio(){
    let precio = parseInt(prompt("Ingrese el precio maximo del producto"));
    let filtradoPrecio = productos.filter((item) => item.precio < precio);

    if (filtradoPrecio.length > 0) {
      console.log("Libros filtradas por precio:");
      filtradoPrecio.forEach((item) => {
        alert(`
           Nombre: ${item.nombre}
           Precio: ${item.precio}
           `);
    });
    } else {
      alert(`No se encontraron libros dentro del rango de precio $${precio}.`);
    mostrarProductos()
    }
}




function crearProducto(){
  class Producto {
    constructor( nombre, autor, editorial, precio, stock) {
      this.nombre = nombre;
      this.autor = autor;
      this.editorial = editorial;
      this.precio = precio;
      this.stock = stock;
    }
  
    // vender() {
    //   if (this.stock === 0) {
    //     console.log("Se acabo el producto");
    //   } else {
    //     this.stock -= 1; 
    //   }
    // }
  }
        nombre = prompt( 'Inserte nombre del libro:' );
        autor = prompt( 'Inserte el autor:' );
        editorial = parseInt(prompt( 'Inserte la editorial:'));
        precio = parseInt(prompt( 'Inserte el valor de venta del producto:'));
        stock = parseInt(prompt( 'Inserte cantidad disponible:'));


        productos.push(new Producto(nombre, autor, editorial, precio, stock));

        alert( `Excelente, tu producto fue añadido con exito:
        Nombre: ${nombreProducto }
        Autor: ${ autorProduct } 
        Editorial: ${ ditorialProducto }
        Precio: ${ precioProducto }
        Stock disponible: ${ stockProducto }` );

         console.log(productos);
}





/* USUUARIOS */




const usuarios = [{nombreusuario: 'admin', contrasenia: '9090'},];

class Usuario {
    constructor(nombreusuario, contrasenia) {
    this.nombreusuario = nombreusuario;
    this.contrasenia = contrasenia;
    }
}

function logIn(){
    let nombreusuario = prompt("Ingrese su nombre de usuario");
    let contrasenia = prompt("Ingrese su contraseña");
    let loginUsuario;
    
    for (const user of usuarios) {
      if (user.nombreusuario === nombreusuario && user.contrasenia === contrasenia ) {
        loginUsuario = user;
      }
    }
    if (loginUsuario) {
      alert("iniciaste sesion correctamente");
    } else {
        alert("el usuario no existe, debes crear una cuenta");
        let newusuario = prompt("Ingrese un nombre de usuario");
        let newcontrasenia = prompt("Ingrese una contraseña");
        if (newusuario != "" &&  newcontrasenia != "") {
            alert( "su usuario fue creado con exito");
            const usuario1 = new Usuario(newusuario,newcontrasenia);
            usuarios.push(new Usuario(newusuario,newcontrasenia));
            let div = document.createElement("div");div.innerHTML = `<h2>Hola ${newusuario}! </h2>`;
            document.body.append(div);
            mostrarProductos()
         } else {
           alert("hubo algun problema");
         } 
    }
  }
  console.log(usuarios);

  let selectLog = parseInt(prompt(`
 Hola! te damos la bienvenida!
 Para continuar elija una opción: 
 1. crear usuario 
 2. login `)); 

 if (selectLog === 1 ) {
    let newusuario = prompt("Ingrese un nombre de usuario");
    let newcontrasenia = prompt("Ingrese una contraseña");
    if (newusuario != "" &&  newcontrasenia != "") {
        alert( "su usuario fue creado con exito");
        usuarios.push(new Usuario(newusuario,newcontrasenia));
        let div = document.createElement("div");div.innerHTML = `<h2>Hola ${newusuario}! </h2>`;
        document.body.append(div);
        
     } else {
       alert("hubo algun problema");
     } 
 } else if (selectLog === 2 ){
    alert("Iniciá sesión");
    logIn();
 }else {
   alert( " el valor ingresado no es valido");
   parseInt(prompt(`Por favor, para continuar elija una opción: 
 1. crear usuario 
 2. login `)); 
 }












    /* Elegir opciones de tarea*/ 
    let selectOpcion = parseInt(prompt(`
    Ingrese una opción: 
    1. Comprar libros 
    2. Ver catálogo de libros 
    3. Buscar libros por nombre
    4. Filtrar por precio
    5. Crear Producto nuevo `)); 

    if (selectOpcion === 1 ) {
      alert("Esta opción aun no esta habilitada");
      mostrarProductos();
    } else if (selectOpcion === 2 ){
      let div = document.createElement("div");div.innerHTML = `<h2>catalogo</h2>`;
      document.body.append(div);
      mostrarProductos();
    }else if (selectOpcion === 3 ){
      filtrarNombre();
    }else if (selectOpcion === 4 ){
      filtrarPrecio();
    }else if (selectOpcion === 5 ){

      class Producto {
        constructor( nombre, autor, editorial, precio, stock) {
          this.nombre = nombre;
          this.autor = autor;
          this.editorial = editorial;
          this.precio = precio;
          this.stock = stock;
        }
      
        // vender() {
        //   if (this.stock === 0) {
        //     console.log("Se acabo el producto");
        //   } else {
        //     this.stock -= 1; 
        //   }
        // }
      }
            nombre = prompt( 'Inserte nombre del libro:' );
            autor = prompt( 'Inserte el autor:' );
            editorial = prompt( 'Inserte la editorial:');
            precio = parseInt(prompt( 'Inserte el valor de venta del producto:'));
            stock = parseInt(prompt( 'Inserte cantidad disponible:'));
    
    
            productos.push(new Producto(nombre, autor, editorial, precio, stock));
    
            alert( `Excelente, tu producto fue añadido con exito:\n 
            Nombre: ${nombre}\n 
            Autor: ${ autor }\n 
            Editorial: ${ editorial }\n 
            Precio: ${ precio }
            Stock disponible: ${ stock }\n` );
    
            console.log(productos);
            mostrarProductos()

    }else {
      alert( " el valor ingresado no es valido");
      parseInt(prompt(`Por favor elija una opción:
      1. Comprar libros 
      2. Ver catálogo de libros 
      3. Buscar libros por nombre
      4. Filtrar por precio
      5. Crear Producto nuevo `)); 
    }





