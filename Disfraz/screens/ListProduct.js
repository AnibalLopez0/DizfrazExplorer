// productsData.js
let productsData = [
  // Agrega más elementos si es necesario
];

// Función para obtener la lista de productos
export const obtenerProductos = () => {
return productsData;
};

export const sumarPreciosProductos = (productos) => {
// Verificamos si la lista de productos está vacía
if (!productos || productos.length === 0) {
  return 0;
}

// Sumamos el precio de cada producto
const total = productos.reduce((acumulador, producto) => {
  // Convertimos el precio a un número decimal usando parseFloat
  const precioDecimal = parseFloat(producto.precio);
  // Sumamos el precio al acumulador
  return acumulador + precioDecimal;
}, 0);

// Devolvemos el total
return total;
};

// Función para agregar un producto a la lista
export const agregarProducto = (nuevoProducto) => {
productsData.push(nuevoProducto);
};

// Función para eliminar un producto por su id
export const eliminarProductoPorId = (id) => {
productsData = productsData.filter(producto => producto.id !== id);
};

// Función para eliminar toda la lista de productos
export const eliminarTodosLosProductos = () => {
productsData = [];
};

export default productsData;
