document.addEventListener('DOMContentLoaded', function() {
    var elemsCarousel = document.querySelectorAll('.carousel');
    var instancesCarousel = M.Carousel.init(elemsCarousel, {
        fullWidth: true,
        indicators: true
    });
    
    var elemsParallax = document.querySelectorAll('.parallax');
    var instancesParallax = M.Parallax.init(elemsParallax);
    
    var elemsModal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(elemsModal);

    // Scrollfire for scroll animations
    var options = [
        {selector: '.hero-section', offset: 0, callback: function() { M.fadeIn('.hero-overlay'); }},
        {selector: '.section', offset: 100, callback: function() { M.fadeIn('.section'); }},
    ];
    M.ScrollFire.init(options);
});
