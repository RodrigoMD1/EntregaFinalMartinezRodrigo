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

// let exito =promocion();
// if (exito){}

let remera = 500;
let zapatillas = 1300;
let precio = 0;
let total =  precio + remera + zapatillas; 

  // let descuento= mail();
 // if (descuento){
   // let rebaja = total - 5%}

alert("contamos con estos modelos actualmente de ropa y zapatillas ")

let modelos = prompt("elegi el que mas te guste \n1- remera negra lisa L. \n2- Remera blanca lisa M. \n3 - Remera azul lisa L. \n4 - Remera verde lisa L.\n5 - Remera violeta lisa L.\n6 - Remera morado lisa L.\n7 - Remera amarilla lisa L.\n8 - Remera gris lisa L.\n9 - zapatillas Air Jordan 1 Rojo.\n10 - zapatillas Air Jordan 1 negro. \n11 - zapatillas Air Jordan 1 azul. \n12 - zapatillas Air Jordan 1 verde. \nPresiona 0 para finalizar la compra. ");


function Carrito(){
    while(modelos != "0"){
        switch (modelos) {
            case "remera negra lisa L":
                precio = remera;
                console.log("se agrego al carrito remera negra lisa L");
                break;
            case "remera blanca lisa M":
                precio = remera;
                console.log("se agrego al carrito remera blanca lisa M");
                break;
            
            case "remera Azul lisa L":
                precio = remera;
                console.log("se agrego al carrito remera azul lisa L");
                break;
            
            case "remera Verde lisa L":
                precio = remera;
                console.log("se agrego al carrito remera Verde lisa L");
                 break;
            
            case "remera Violeta lisa L":
                precio = remera;
                console.log("se agrego al carrito remera Violeta lisa L");
                break;
             case "remera Morado lisa L":
                precio = remera;
                console.log("se agrego al carrito remera morado lisa L");
                break;
            
            case "remera Amarilla lisa L":
                precio = remera;
                console.log("se agrego al carrito remera Amarilla lisa L");
                 break;
            
            case "remera gris lisa L":
                precio = remera;
                console.log("se agrego al carrito remera gris lisa L");
                break;

            case "zapatillas Air Jordan 1 rojo":
                precio = remera;
                console.log("se agrego al carrito zapatillas Air Jordan 1 rojo ");
                 break;
            case "zapatillas Air Jordan 1 negro":
                precio = remera;
                console.log("se agrego al carrito zapatillas Air Jordan 1 negro ");
                 break;
                                            
            case "zapatillas Air Jordan 1 azul ":
                precio = remera;
                console.log("se agrego al carrito zapatillas Air Jordan 1 azul ");
                break;
                                            
            case "zapatillas Air Jordan 1 verde":
                precio = remera;
                console.log("se agrego al carrito zapatillas Air Jordan 1 verde ");
                break;
       
        
            default:
                alert("el producto no lo tenemos actualmente");
                total = precio + remeras + zapatillas;
                
        }
        modelos = prompt("Selecione otro producto o ingrese 0 para finalizar la compra");
        if (modelos == "0"){
            alert("en total es " + total + "quiere seguir comprando?")
        }
    }
    
}

alert("gracias por elegirnos vuelva prontos ");











