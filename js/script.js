$(document).ready(
  function() {
    //azione passaggio mouse
    $("#header-right li").mouseenter(
      function() {
        $(this).children().addClass("active");
      }
    )

    //azione uscita mouse
    $("#header-right li").mouseleave(
      function() {
        $(this).children().removeClass("active");
      }
    )

    //azione click mouse
    $("#header-right li").click(
      function() {
        $(this).children().toggleClass("active");
      }
    )

    //azione passaggio mouse selettore lingua
    $("#selettore-lingua").mouseenter(
      function() {
        scambioIcona($("#lingua"));
      }
    )

    //azione uscita mouse selettore lingua
    $("#selettore-lingua").mouseleave(
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
