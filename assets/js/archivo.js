/* Inicio Smooth Scroll
    $(document).ready(function() {
        $('a.smooth-scroll').click(function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 100, function(){
                    window.location.hash = hash;
                });
            }
        });
    });
 Término Smooth Scroll */