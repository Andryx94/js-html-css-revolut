$(document).ready(
  function() {
    //variabili generali
    var dropdownMenu = $("#header-right ul .dropdown-menu-ms");
    var selettoreLingue = $("#selettore-lingua");

    //azione passaggio mouse
    dropdownMenu.mouseenter(
      function() {
        $(this).children().addClass("active");
      }
    )

    //azione uscita mouse
    dropdownMenu.mouseleave(
      function() {
        $(this).children().removeClass("active");
      }
    )

    //azione click mouse
    dropdownMenu.click(
      function() {
        $(this).children().toggleClass("active");
      }
    )

    //azione passaggio mouse selettore lingua
    selettoreLingue.mouseenter(
      function() {
        scambioIcona($("#lingua"));
      }
    )

    //azione uscita mouse selettore lingua
    selettoreLingue.mouseleave(
      function() {
        scambioIcona($("#lingua"));
      }
    )
  }
);

//FUNZIONE scambio icona "chevron"
function scambioIcona(icona){
  if (icona.hasClass("fa-chevron-up")){
    icona.removeClass("fa-chevron-up");
    icona.addClass("fa-chevron-down");
  }

  else {
    icona.removeClass("fa-chevron-down");
    icona.addClass("fa-chevron-up");
  }
}
