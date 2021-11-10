function calcula_precio() {
    var multiplicador;
    var total;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
   
    if (categoria == 'Estudiante'){
        multiplicador = 0.5;
    }else if (categoria == 'Jubilado'){
        multiplicador = 0.6;
    }else if (categoria == 'Abogado'){
        multiplicador = 0.7;
    }
    total = 1000 * cantidad * multiplicador;
    console.log(cantidad);
    console.log(multiplicador);
    console.log(total);

    document.getElementById('a-pagar').innerHTML = 'Total a pagar:$ '+total;
  }
