function calcular() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    
  
  
   
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
         error("Por favor, ingrese un número válido para todas las notas.");
    } else if (n1 > 30 || n2 > 30 || n3 > 40) {
         error("Las primeras dos  notas no deben ser mayor a 30%  y 40% para la tercera nota.");
    } else {
          let suma = n1 + n2 + n3;
          let mensaje = "";
          if (suma >= 0 && suma <= 59) {
            mensaje = "Reprobado";
          } else if (suma >= 60 && suma <= 79) {
            mensaje = "Bueno";
          } else if (suma >= 80 && suma <= 89) {
            mensaje = "Muy Bueno";
          } else if (suma >= 90 && suma <= 100) {
            mensaje = "Sobresaliente";
          } else {
                 error("La suma de las notas está fuera de rango.");
            return; 
          }
          
         
          document.getElementById("textP").textContent = "Su nota Obtenida es:  " + suma;
          document.getElementById("textP1").textContent = "Observación:  " + mensaje;
    
    }
  
  }
  
  function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en la Operacion",
        text: text
    });
  }
  
  
  function limpiarFormulario() {
    document.getElementById("n1").value = " ";
    document.getElementById("n2").value = " ";
    document.getElementById("n3").value = " ";
  
  }