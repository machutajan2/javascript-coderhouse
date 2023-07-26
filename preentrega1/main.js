/* 
e-commerce
*/


/* preguntar edad */

let nombre = prompt("Ingrese su nombre");
let saludo = "Hola" + " " + nombre;

let edad = prompt("Ingrese su edad");
if (edad >= 18) {
    alert(`${saludo} tenes ${edad}, podés  entrar al sitio web`);
} else if (edad <= 18){
    alert(`${saludo} tenes ${edad}, menos de la edad permitda y no podés entrar a nuestro sitio`);
}else{
    alert( `no podes ingresar ${nombre}, el valor ingresado no es valido`)
}


if(edad >= 18){

    /* iniciar sesion*/
    let nameUser = "admin"; 
    let passUser = "12345"; 

    let loginnameUser = prompt("Ingrese su usuario "); 
    let loginpassUser = prompt("Ingrese su contraseña "); 

    // if (loginnameUser === nameUser  &&  loginpassUser === passUser) {
    //   alert( "Ingresaste correctamente");
    //     loginUser = 1;
    // }else{
    //   alert( "los datos ingresados no son validos. Vuelve a intentarlo");
    //   loginnameUser = prompt("Ingrese su usuario "); 
    //   loginpassUser = prompt("Ingrese su contraseña ");  
    // }

    while((loginnameUser != nameUser)   ||  (loginpassUser != passUser)){
          alert( "Alguno de los datos ingresados no es correcto. Vuelve a intentarlo");
          loginnameUser = prompt("Ingrese su usuario "); 
          loginpassUser = prompt("Ingrese su contraseña ");  
    }

      if((loginnameUser === nameUser)  &&  (loginpassUser === passUser)){
          /*  producto s*/ 
          let selectProducto = parseInt(prompt("Elija el produucto quue quiere agregar: \n 1. Remeras \n 2.Pantalones \n 3. Zapatillas ")); 

          if (selectProducto === 1 ) {
            alert("categoria 1");
          } else if (selectProducto === 2 ){
            alert("categoria 2");
          }else if (selectProducto === 3 ){
            alert( "categoria 3")
          }else {
            alert( " el valor ingresado no es valido");
            parseInt(prompt("por favor Elija el produucto quue quiere agregar: \n 1. Remeras \n 2.Pantalones \n 3. Zapatillas ")); 
          }
          //console.log(selectProducto)

          let nombreProducto = "";
          let colorProducto = "";
          let stockProducto = "";
          let valorProducto = "";
          let envioProducto = 1250;


          function crearProducto (){

              nombreProducto = prompt( 'Inserte nombre del producto:' );
              colorProducto = prompt( 'Inserte el color:' );
              stockProducto = parseInt(prompt( 'Inserte cantidad disponible:'));
              valorProducto = parseInt(prompt( 'Inserte el valor de venta del producto:'));

              alert( `Excelente, tu producto fue añadido con exito:\n 
              Nombre: ${nombreProducto }\n 
              Color: ${ colorProducto }\n 
              Stock disponible: ${ stockProducto }\n
              Valor: ${ valorProducto }` );
          }

          crearProducto();

          //console.log(nombreProducto);
          //console.log(colorProducto);
          //console.log(stockProducto);


          const sumaEnvio  = (a,b) => a + b
          let nuevoPrecio = sumaEnvio(valorProducto,envioProducto)

          alert( `Con el envío al interior del pais tu producto saldrá ${nuevoPrecio}` );
          //console.log(nuevoPrecio)

          }
}
