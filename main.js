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

// Selección de los filtros
const filtroPizza = document.getElementById('filtroPizza');
const filtroHamburguesa = document.getElementById('filtroHamburguesa');
const filtroPancho = document.getElementById('filtroPancho');

const cardsContainer = document.getElementById('cardsContainer');
let comidaFiltrada = [];
let filtroSeleccionado = '';

// Función para filtrar y renderizar la comida
function filtrarComida(filtro) {
    filtroSeleccionado = filtro;

    // Filtrar el array de alimentos según el filtro seleccionado
    comidaFiltrada = alimentos.filter(alimento => alimento.tipo === filtroSeleccionado);

    // Limpiar el contenido del contenedor de las tarjetas
    cardsContainer.innerHTML = '';

    // Renderizar las nuevas tarjetas
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

// Asociar los filtros a los eventos de click
filtroPizza.addEventListener('click', () => filtrarComida('pizza'));
filtroHamburguesa.addEventListener('click', () => filtrarComida('hamburguesa'));
filtroPancho.addEventListener('click', () => filtrarComida('pancho'));

// Ejecutar una renderización inicial (por ejemplo, para mostrar pizzas al cargar)
filtrarComida('pizza');

console.log('Productos renderizados con éxito.');