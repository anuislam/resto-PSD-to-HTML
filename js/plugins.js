/* display rating in form of stars */
$.fn.makeStars = function() {
    $(this).each( function() {
        var rating       = $(this).data('rating'),
            starNumber   = $(this).children().length,
            fullStars    = Math.floor(rating),
            halfStarPerc = (rating - fullStars) * 100;

        if(rating > 0) {
            $(this).children().each(function (index) {
                $(this).addClass('fa-star');
                $(this).removeClass('fa-star-o');
                return ( (index + 1) < fullStars );
            });
        }

        if ( halfStarPerc !== 0 && fullStars < starNumber ) {
            var halfStar = $(this).children(":nth-child(" + parseInt(fullStars+1, 10) + ")");

            $('<span class="fa fa-star fa-star-percentage"></span>').width(halfStarPerc + '%').appendTo(halfStar);
        }

    });
};
