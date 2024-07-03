let nombre = prompt("Bienvenido! Ingrese su nombre");
let edad = prompt("por favor, ingrese su edad");

if (edad <= 18) {
  alert("usted no puede ingresar " + nombre + " es menor de edad");
} else {
  let monto = Number(prompt("ingrese el monto a calcular"));
  alert("Tenemos 15% de recargo hasta 3 cuotas y 30% hasta el limite de 6");
  let cuotas = Number(prompt("ingrese cantidad de cuotas"));

  switch (cuotas) {
    case 1:
    case 2:
    case 3:
      let recargo1 = monto + monto * 0.15;
      let cantidadCuotas1 = recargo1 / cuotas;
      alert(
        `Tiene un 15% re recargo, total: ${recargo1}. Le quedaria un total de ${cuotas} de ${cantidadCuotas1}`
      );
      break;

    case 4:
    case 5:
    case 6:
      let recargo2 = monto + monto * 0.3;
      let cantidadCuotas2 = recargo2 / cuotas;
      alert(
        `Tiene un 30% re recargo, total: ${recargo2}. Le quedaria un total de ${cuotas} de ${cantidadCuotas2}`
      );
      break;

    default:
      alert("numero no valido");
  }
}

alert(`Muchas gracias ${nombre}!`);

// no hay mucho que comentar, esta bastante simple xD //
