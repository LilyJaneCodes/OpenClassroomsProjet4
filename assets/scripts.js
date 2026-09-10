$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

        // Navigation de la modale avec les touches du clavier
    $(document).on('keydown', function(event) {

        // Vérifie que la modale est ouverte
        if ($('#myAwesomeLightbox').hasClass('show')) {

            if (event.key === 'ArrowLeft') {
                $('.mg-prev').trigger('click');
            }

            if (event.key === 'ArrowRight') {
                $('.mg-next').trigger('click');
            }
        }
    });
});

