$(document).ready(function() {
    $('.slide').slick({
        autoplay: true,
        dots: true
    })

    $('.slide-two').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots:true
    });

    //Animação dos menu ancora
    $('nav a').click(function() {
        $('html, body').animate({
            scrollTop:$(this.hash).offset().top
        },1000)
    })
    // Fim da animação menu ancora

    $('#entrada-watts').mask('(00) 00000-0000');
    
    $('form').submit(function(e) {
        e.preventDefault();
        $('#entrada-nome').val("");
        $('#entrada-watts').val("");
    });

})
