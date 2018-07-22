(function($){
  $(function(){

    $('.sidenav').sidenav();
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
