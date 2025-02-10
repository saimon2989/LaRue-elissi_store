jQuery_T4NT(document).ready(function($) {

     /**
     * Variant selection changed
     */
	  $( document ).on( "variant:change", function( evt, variant ) {
	    //console.log( variant );
	  });

});

document.addEventListener("DOMContentLoaded", function() {
    let companyField = document.querySelector('input[name="company"]');
    if (companyField) {
        companyField.setAttribute("type", "number");
        companyField.setAttribute("placeholder", "Número de Cédula");
        companyField.setAttribute("id", "Cedula");
        
        let label = document.querySelector('label[for="TextField2"]');
        if (label) {
            label.innerText = "Cédula";
            label.setAttribute("for", "Cedula");
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() { 
        let empresaField = document.querySelector('#TextField2');

        if (empresaField) {
            empresaField.setAttribute("type", "tel"); // Evita restricciones de Safari con type="number"
            empresaField.setAttribute("inputmode", "numeric"); // Activa teclado numérico en móviles
            empresaField.setAttribute("placeholder", "Cédula");

            empresaField.addEventListener("input", function() {
                this.value = this.value.replace(/\D/g, ''); // Solo permite números
            });

            // Cambiar la etiqueta asociada al campo
            let label = document.querySelector('label[for="TextField2"]');
            if (label) {
                label.innerText = "Cédula";
            }
        }
    }, 2000); // Espera a que Shopify cargue los campos
});
