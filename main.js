// Se crea el array de objetos que contiene los productos que vamos a utilizar en el proyecto.
const alimentos = [{
    tipo: 'pizza',
    detalle: 'Pepperoni',
    precio: 100,
    nombre: 'Pizza Copada',
    id: 1,
    stock: true,
    img: 'https://media.lacapital.com.ar/p/a31776c390c13963ec85b6baa53eb016/adjuntos/205/imagenes/030/902/0030902701/642x0/smart/pizza-4jpg.jpg'
},
{
    tipo: 'pizza',
    detalle: 'Hawaiana',
    precio: 150,
    nombre: 'Pizza Recopada',
    id: 2,
    stock: true,
    img: 'https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas-1200x675.jpg'
},
{
    tipo: 'pizza',
    detalle: 'Fugazzeta',
    precio: 200,
    nombre: 'Pizza Recontracopada',
    id: 3,
    stock: false,
    img: 'https://www.paulinacocina.net/wp-content/uploads/2023/11/como-hacer-pizza-hawaiana-Paulina-Cocina-Recetas-1200x675.jpg'
},
{
    tipo: 'hamburguesa',
    detalle: 'Americana',
    precio: 50,
    nombre: 'Gordaneitor 3000',
    id: 4,
    stock: false,
    img: 'https://www.carniceriademadrid.es/wp-content/uploads/2022/09/smash-burger-que-es.jpg'
},
{
    tipo: 'pancho',
    detalle: 'Con palta',
    precio: 40,
    nombre: 'Completito shileno po',
    id: 5,
    stock: false,
    img: 'https://publimicro.cl/wp-content/uploads/2024/03/%C2%A1Sabor-autentico-Completo-chileno-entre-los-tres-mejores-Hot-Dogs-del-mundo-jpg.webp'
}]

// Se traen los elementos de la lista que está arriba de los productos para después agregarles un addEventListener que nos permita filtrar los productos en base a a la comparación de su tipo.
const filtroPizza = document.getElementById('filtroPizza');
const filtroHamburguesa = document.getElementById('filtroHamburguesa');
const filtroPancho = document.getElementById('filtroPancho');

// Se trae el container de las cards que muestran los objetos para usarlo más tarde.
const cardsContainer = document.getElementById('cardsContainer');

// Se crea un array vacío al cuál vamos a pushear los productos que filtremos en el futuro para paso seguido, renderizarlos.
let comidaFiltrada = [];

// Se crea una variable la cuál va a contener el tipo del producto con el cuál vamos a filtrar la lista.
let filtroSeleccionado = '';

// Función para filtrar y renderizar la comida, tiene como parametro un valor "filtro"
function filtrarComida(filtro) {

    // Se sobreescribe filtroSeleccionado con el valor de filtro, primeramente es un string vacío pero en un futuro le vamos a colocar un valor por defecto al entrar a la página, este paso lo podemos omitir y directamente darle un valor a la hora de definirlo.
    filtroSeleccionado = filtro;

    // Filtrar el array de alimentos según el filtro seleccionado, en este caso esta vacío por lo tanto no va a renderizar nada (por ahora)
    comidaFiltrada = alimentos.filter(alimento => alimento.tipo === filtroSeleccionado);

    // Limpiar el contenido del contenedor de las tarjetas, esto nos sirve para que a la hora de seleccionar otro tipo de productos, todos los que se están mostrando se borren y de paso a crear nuevas tarjetas.
    cardsContainer.innerHTML = '';

    // Se renderizan las nuevas tarjetas haciendo uso de la creación dinámica de elementos del DOM.
    comidaFiltrada.forEach(pizza => {
        const nuevaCard = document.createElement('article');
        nuevaCard.classList.add('productoCard');

        const agregarImagen = document.createElement('img');
        agregarImagen.src = pizza.img;
        agregarImagen.classList.add('productoImagen');

        const agregarTitulo = document.createElement('span');
        agregarTitulo.textContent = pizza.nombre;
        agregarTitulo.classList.add('productoTitulo');

        const agregarPrecio = document.createElement('span');
        agregarPrecio.textContent = '$' + pizza.precio;
        agregarPrecio.classList.add('productoPrecio');

        const agregarDetalle = document.createElement('span');
        agregarDetalle.textContent = pizza.detalle;
        agregarDetalle.classList.add('productoDetalle');

        const agregarCarrito = document.createElement('button');
        agregarCarrito.innerText = '+ Agregar al carrito';
        agregarCarrito.classList.add('botonCarrito');

        nuevaCard.appendChild(agregarImagen);
        nuevaCard.appendChild(agregarDetalle);
        nuevaCard.appendChild(agregarTitulo);
        nuevaCard.appendChild(agregarPrecio);
        nuevaCard.appendChild(agregarCarrito);

        cardsContainer.appendChild(nuevaCard);
    });
}

// Se asocian los filtros a los eventos del click, al presionar cada uno de estos botones, volvemos al principio de la función filtrarComida y le asignamos al parametro "filtro" un valor, esto nos sirve ya que una vez que tenemos el valor, se lo vamos a sobreescribir a la variable filtroSeleccionado.
filtroPizza.addEventListener('click', () => filtrarComida('pizza'));
filtroHamburguesa.addEventListener('click', () => filtrarComida('hamburguesa'));
filtroPancho.addEventListener('click', () => filtrarComida('pancho'));

// Se le asigna el valor 'pizza' a filtrarComida para que inicialmente solo muestre las pizzas.
filtrarComida('pizza');

// console.log al final para verificar que se recorrió todo el código con éxito y no hubo un error entre medio que corte la lectura.
console.log('Productos renderizados con éxito.');