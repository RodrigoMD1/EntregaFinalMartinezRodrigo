
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo = document.querySelector('cart-product');
const rowProduct = document.querySelector('.row-product');

// lista de todos los contenedores de productos
const productslist = document.querySelector('.container-items');

//variable de arreglos de productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


// buscador 
document.addEventListener('keyup', e =>{
   if(e.target.matches('#buscador')){
    document.querySelectorAll(".item").forEach(Articulos => {
     Articulos.textContent.toLocaleLowerCase().includes(e.target.value)
     ? Articulos.classList.remove('filtro')
     : Articulos.classList.add('filtro');  
    })

   } 
    
})




productslist.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});
rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});





// funcion para mostar HTML

const showHTML = () =>{

    if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `  <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantity}</span>
        <p class="titulo-producto-carrito">${product.title}</p>
        <span class="precio-producto-carrito">${product.price}</span>
    </div>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>

    `;

    rowProduct.append(containerProduct);

    total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;

    })

    valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;

};


// parte del registro 

const formRegister = document.getElementById("formularioRegistro"),

nombres = document.querySelector("#inputNombre"),
apellidos = document.querySelector("#inputApellido"),
emails = document.querySelector("#inputEmail");


let usuarios;

// si hay datos en LS usuarios = LS si no hay usuarios =[]
if(localStorage.getItem("usuarios")) {
	usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else{
	usuarios =[];
}	

// constructor de usuario 
class Usuario {
	constructor(nombre,apellido,email) {
		this.nombres = nombre;
		this.apellidos = apellido;
		this.emails = email;
	}
}

// guardar usuario
function guardarUsuario(usuario){
	return usuarios.push(usuario);
}


// guardar en LS 
function guardarEnLS(arr) {
	return localStorage.setItem('usuarios',JSON.stringify(arr));
}
// evento

formRegister.addEventListener('submit', (e)=>{

e.preventDefault();

const newUser = new Usuario(nombre.value, apellido.value, email.value);

console.log(newUser);

guardarUsuario(newUser);
guardarEnLS(usuarios);
formRegister.reset(); 

})


// validacion de registro 
const formularioRegistro = document.getElementById("formularioRegistro");
const registrar = document.getElementById("registrar");
const warnings = document.getElementById("warnings");
const nombre = document.getElementById("inputNombre");
const apellido = document.getElementById("inputApellido");
const email = document.getElementById("inputEmail");

registrar.addEventListener("click", function() {
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mensajeWarnings = "";

  if (nombre.value.length < 6) {
    mensajeWarnings += "Introduzca un nombre <br>";
    entrar = true;
  }

  if (!regexEmail.test(email.value)) {
    mensajeWarnings += "Introduzca un email <br>";
    entrar = true;
  }

  if (apellido.value.length < 8) {
    mensajeWarnings += "Introduzca un apellido <br>";
    entrar = true;
  }

  if (entrar) {
    warnings.innerHTML = mensajeWarnings;
  } else {
    Swal.fire({
      icon: "success",
      title: "GRACIAS POR REGISTRARTE",
      text: "Ahora vas a poder recibir las últimas ofertas de nuestros productos",
      iconColor: "green"
    });
  }
});


window.addEventListener("scroll", function() {
	let nav = document.getElementById("nav");
	if (window.pageYOffset > 0) {
	  nav.classList.add("black");
	} else {
	  nav.classList.remove("black");
	}
  });
  
// MAPA 

function iniciarMap(){
	var coord = { lat:-34.603747 ,lng:-58.3816794};
	var Map = new google.maps.Map(document.getElementById('map'),{
		zoom :10,
		center: coord
	}); 
}


// api de pago 

window.onload = function() {
	const stripe = Stripe("pk_test_51MXCbtD4tbw4g77tJaKkQqrI2x6prj9j3al9bSBXMmie8suktJqFSoJT143W7p2y2uBGbWbejG5XsxAb4fLajUOP00Vi518I6L");
	
	document.getElementById("Checkout").addEventListener("click", function(){
		stripe.redirectToCheckout({
			lineItems: [
				{
					price: "price_1MXFt3D4tbw4g77tso81sEH6",
					quantity: 1,
				},
			],
			mode: "payment",
			successUrl: "http://127.0.0.1:5500/assets/aprobado.html",
			cancelUrl: "http://127.0.0.1:5500/assets/cancel.html",
		})
		.then(function(result) {
			// Handle the result of the redirect
		});
	});
};
