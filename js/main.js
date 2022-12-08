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
// console.log(promocion());

// let exito =promocion();
// if (exito){}

let remera = 500;
let zapatillas = 1300;
let precio = 0;
let total =  remera + zapatillas; 

  // let descuento= mail();
 // if (descuento){
   // let rebaja = total - 5%}

alert("contamos con estos modelos actualmente de ropa y zapatillas ")

let modelos = parseInt (prompt("elegi el que mas te guste \n1- remera negra lisa L. \n2- Remera blanca lisa M. \n3 - Remera azul lisa L. \n4 - Remera verde lisa L.\n5 - Remera violeta lisa L.\n6 - Remera morado lisa L.\n7 - Remera amarilla lisa L.\n8 - Remera gris lisa L.\n9 - zapatillas Air Jordan 1 Rojo.\n10 - zapatillas Air Jordan 1 negro. \n11 - zapatillas Air Jordan 1 azul. \n12 - zapatillas Air Jordan 1 verde. \nPresiona 0 para finalizar la compra. "));


function Carrito() {
    while(modelos != "0"){
        switch (modelos) {
            


            
            case 1: "remera negra lisa L"
                if(remera<=total){
                    total =remera
                }
                alert("se agrego al carrito remera negra lisa L");
                break;






            case 2: "remera blanca lisa M"
            if(remera<=total){
                total =remera
            }
                alert("se agrego al carrito remera blanca lisa M");
                
                break;
            
            case 3: "remera Azul lisa L"
            if(remera<=total){
                total =remera
            }
                alert("se agrego al carrito remera azul lisa L");
                break;
            
            case 4: "remera Verde lisa L"
            if(remera<=total){
                total =remera
            }
                alert ("se agrego al carrito remera Verde lisa L");
                 break;
            
            case 5: "remera Violeta lisa L"
            if(remera<=total){
                total =remera
            }
                alert ("se agrego al carrito remera Violeta lisa L");
                break;
             case 6: "remera Morado lisa L"
             if(remera<=total){
                total =remera
            }
                alert ("se agrego al carrito remera morado lisa L");
                break;
            
            case 7: "remera Amarilla lisa L"
            if(remera<=total){
                total =remera
            }
                alert ("se agrego al carrito remera Amarilla lisa L");
                 break;
            
            case 8: "remera gris lisa L"
            if(remera<=total){
                total =remera
            }
                alert ("se agrego al carrito remera gris lisa L");
                break;

            case 9: "zapatillas Air Jordan 1 rojo"
            if(zapatillas<=total){
                total =zapatillas
            }
                alert ("se agrego al carrito zapatillas Air Jordan 1 rojo ");
                 break;
            case 10: "zapatillas Air Jordan 1 negro"
            if(zapatillas<=total){
                total =zapatillas
            }
                alert ("se agrego al carrito zapatillas Air Jordan 1 negro ");
                 break;
                                            
            case 11 :"zapatillas Air Jordan 1 azul "
            if(zapatillas<=total){
                total =zapatillas
            }
                alert ("se agrego al carrito zapatillas Air Jordan 1 azul ");
                break;
                                            
            case 12: "zapatillas Air Jordan 1 verde"
            if(zapatillas<=total){
                total =zapatillas
            }
                alert ("se agrego al carrito zapatillas Air Jordan 1 verde ");
                break;
       
        
            default:
                alert("el producto no lo tenemos actualmente");
                
                
        }
        modelos = prompt("Desea agregar otro producto? \n1- remera negra lisa L. \n2- Remera blanca lisa M. \n3 - Remera azul lisa L. \n4 - Remera verde lisa L.\n5 - Remera violeta lisa L.\n6 - Remera morado lisa L.\n7 - Remera amarilla lisa L.\n8 - Remera gris lisa L.\n9 - zapatillas Air Jordan 1 Rojo.\n10 - zapatillas Air Jordan 1 negro. \n11 - zapatillas Air Jordan 1 azul. \n12 - zapatillas Air Jordan 1 verde. \nPresiona 0 para finalizar la compra.");
        if (modelos == "0"){
            alert("en total es " + total );
        }
    }
    
}
console.log(Carrito());

alert("gracias por elegirnos vuelva prontos ");











