
alert("mira nuestro catalogo de ropa disponibles y elegi, pero primero ingresa tu mail para recibir nuestras ofertas");


let codigo = "ZXGFI";

function promocion() {
    let ingresar= false;
    for (let i = 4; i >= 0; i--){
        let userMail = prompt("ingresa el codigo de descuento");
        if (userMail == codigo){
            alert("gracias por ingresar tu codigo ahora vas a tener un descuento del 5%");
            ingresar = true;
            break
        }else{
            alert("por favor ingresa un codigo  valido te quedan " + i + "chances");
        }
    }
    return ingresar;
}
 console.log(promocion());

 




let resultado= 0; 
let cantidad = 0; 
let total = 0; 


// listado de objetos (productos)

function Ropa(nombre, precio, stock){
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.stock = parseInt(stock);

 
  this.agregarImpuesto = (impuesto) => {
    this.precio = this.precio + (this.precio * impuesto ) /100;
};

/*
this.StockDisponible=(cantidad)=>{
  console.log(this.stock)
  if(cantidad<=this.stock){
    this.stock - cantidad;
  }else{
    console.log("SIN stock");
  }
}
*/

}


/* remeralisanegraL.agregarImpuesto(100);
console.log(remeralisanegraL.precio);

*/


const remeralisanegraL = new Ropa("remera lisa negra L",500, 20);
const remeralisablancaM = new Ropa("remera lisa blanca M",500, 30);
const zapatillasnegrasnike = new Ropa("zapatilla negra nike",1000, 10);
const zapatillasblancasnike = new Ropa("zapatillas blancas nike",1200, 5);
/*
remeralisanegraL.StockDisponible(88);
console.log(remeralisanegraL.stock);*/

remeralisanegraL.agregarImpuesto(5);
console.log(remeralisanegraL.precio);




const listado= [remeralisanegraL,remeralisablancaM,zapatillasnegrasnike,zapatillasblancasnike];


alert("disponemos de esta lista de productos actualmente escriba el numero para agregarlo al carrito  \n 1) remera lisa negra L, \n 2) remera blanca lisa M, \n 3) zapatillas negras nike, \n 4) zapatillas blancas nike ");

let entrada = parseInt(prompt("selecione un producto para el carrito escriba, 5 para finalizar compra"));

const CarritoFinal =[];

function Carrito(){
  while(entrada != 5){

    switch(entrada){
      case 1:
        cantidad= parseInt(prompt("cuantos productos quiere comprar?"));
        alert("se agrego al carrito " + cantidad + " remeras lisa negra L");
        if(resultado <= cantidad){
          total += (cantidad * remeralisanegraL.precio);
          alert("el valor de su carrito es de $ " + total);  
        }
        break;


        case 2:
          cantidad= parseInt(prompt("cuantos productos quiere comprar?"));
          alert("se agrego al carrito " + cantidad + " remeras lisa blanca M");
          if(resultado <= cantidad){
            total += (cantidad * remeralisablancaM.precio);
            alert("el valor de su carrito es de $ " + total);  
          }
          break;

          case 3:
            cantidad= parseInt(prompt("cuantos productos quiere comprar?"));
            alert("se agrego al carrito " + cantidad + " zapatillas negras nike");
            if(resultado <= cantidad){
              total += (cantidad * zapatillasnegrasnike.precio);
              alert("el valor de su carrito es de $ " + total);  
            }
            break;


            case 4:
            cantidad= parseInt(prompt("cuantos productos quiere comprar?"));
            alert("se agrego al carrito " + cantidad + " zapatillas blancas nike");
            if(resultado <= cantidad){
              total += (cantidad * zapatillasblancasnike.precio);
              alert("el valor actual  de su carrito es de $ " + total);  
            }
            break;


    default:
      alert("el producto no esta disponible actualmente");

      break;
    }

    CarrgarProducto(CarritoFinal, entrada);
    entrada = parseInt(prompt("selecione un producto para el carrito escriba, 5 para finalizar compra"));
   
  }
}



// carga los producto al array "carritofinal"
function CarrgarProducto(array, entrada) {
  array.push(entrada);
}

// console.log(CarritoFinal);


// total de la compra 

function sumar(){
  let TotalCarrito = total;
  alert("el total de la compra es de $" + TotalCarrito);
}


// filtrar por nombre

function BuscarPorNombre(arr, filtro){
  const encontrado= arr.filter((listado)=>{
    return listado.nombre.includes(filtro);
  })
  return encontrado;
}
const ServEncontrado = BuscarPorNombre(listado,"zapatillas");

console.log(ServEncontrado);



/*
function FiltrarPorNombre(arr,filtro){
  const encontrado= arr.filter((ropa)=>{
    return ropa.nombre.includes(filtro);
  });
}
let buscar=prompt("ingrese la tipo de prenda que busca ejemplo zapatilla o remeras");
const filtrado = FiltrarPorNombre(ropa,buscar);

*/



Carrito();
sumar();


alert("gracias por elegirnos vuelva prontos ");










 

