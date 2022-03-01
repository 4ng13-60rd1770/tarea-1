"use strict";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

document
  .getElementById("formularioPropinas")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const totalCuenta = parseInt(document.getElementById("box").value);
    const propina = document.getElementById("box1").value;
    const totalPago = document.getElementById("total");
    const imprimirCuenta = document.getElementById("cuenta");
    const imprimirPropina = document.getElementById("propina");

    const valorPropina = Math.floor(totalCuenta * propina) / 100;
    let valorFinal = Math.floor(totalCuenta + valorPropina);
    imprimirCuenta.innerHTML = `Total de la cuenta $ ${numberWithCommas(
      totalCuenta
    )}`;
    imprimirPropina.innerHTML = `Propina $ ${numberWithCommas(valorPropina)}`;
    totalPago.innerHTML = `Total a pagar $ ${numberWithCommas(valorFinal)}`;
  });