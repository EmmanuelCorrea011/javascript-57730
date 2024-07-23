let articulos = [
  {
    nombre: "Television",
    precio: 59900,
    descripcion: "Resolucion 4K, HDR, 120Hrz",
    stock: 10,
  },
  {
    nombre: "Secadora",
    precio: 3900,
    descripcion: "Secadora de pelo marca ATMA",
    stock: 5,
  },
];

class Articulo {
  constructor(nombre, precio, descripcion, stock) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.descripcion = descripcion),
      (this.stock = stock);
  }
}

let agregarOtroArticulo = () => {
  let nombre = prompt("Ingrese el nombre del articulo");
  let precio = prompt("Precio?");
  let descripcion = prompt("Ingrese breve descripcion");
  let stock = prompt("Cantidad de Articulos disponibles?");

  let articuloNuevo = new Articulo(nombre, precio, descripcion, stock);
  articulos.push(articuloNuevo);
};

let continuar = confirm("Desea ingresar un articulo?");
while (continuar) {
  agregarOtroArticulo();
  continuar = confirm("Desea ingresar un nuevo articulo?");

  for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
  }
}
