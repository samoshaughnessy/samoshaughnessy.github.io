 let icons = document.getElementsByTagName('i');
console.log(icons)

 
for (let icon of icons){
    icon.addEventListener('mouseenter', function (){
    this.style.fontSize = "80px";  
    });
    icon.addEventListener('mouseleave', function (){
    this.style.fontSize = "50px"; 
  });
}

 var scroll = new SmoothScroll('a[href*="#"]');

  (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

    $(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('bg-dark navbar-dark'); 
    } else {
        $('.navbar').removeClass('bg-dark navbar-dark');
        $('.navbar').addClass('navbar-dark');
        }
        $("i").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("animate fadeIn"); 
            } 
          });
        
    });
    });