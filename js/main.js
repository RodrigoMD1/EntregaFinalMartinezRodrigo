
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

nombre = document.querySelector("#inputNombre"),
apellido = document.querySelector("#inputApellido"),
email = document.querySelector("#inputEmail");


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
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
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

// alert del registro             completo

document.getElementById('registrar').addEventListener('click',function(){

	Swal.fire({
		icon: "success",
		titleText:"GRACIAS POR REGISTRARTE",
		text:"Ahora vas a poder recibir las ultimas ofertas de nuestros productos",
		iconColor: "purple"

	});

});


// registro de compra                  pendiente
document.getElementById('Comprar').addEventListener('click',function(){

	Swal.fire({
		icon: "success",
		titleText:"GRACIAS POR SU COMPRA VUELVA PRONTOS",
		iconColor: "green",

	});

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


// mercadopago api 
