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
