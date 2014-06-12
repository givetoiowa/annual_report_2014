/**
 * Scripts for 2014 Annual Report	
 * Author: Addison Benzshawel / UIF
 */
$(function() {
	// randomize slide order on page load
	var order_options = ['original-order', 'name', 'category'];
	//var sortValue = order_options[Math.floor(Math.random()*order_options.length)];
    var sortValue = 'original-order'; // since people don't like the randomized order

	// initialize isotope 
	var $container = $('#container').isotope({
		itemSelector: '.slide',
		layoutMode: 'masonry',
		masonry: {
			columnHeight: 300
		},
		sortBy: sortValue,
		getSortData: {
			name: '.name',
			category: '[data-category]',
			weight: function( itemElem ) {
				var weight = $( itemElem ).find('.weight').text();
				return parseFloat( weight.replace( /[\(\)]/g, '') );
			}
		}
	});

    $('.slide.leaders').hover(function(){
        $('.sentence').toggle();
        $('.slide.leaders .name').css({
            width: '240px',
            height: '160px',
            margin: '10px 0 0 -15px',
            transition: 'all 0.7s ease'
        })
        $('.slide.leaders .name h3').css({
            display: 'none',
            transition: 'all 0.7s ease'
        });
        $('.slide.leaders .name p').css({
            display: 'block',
            transition: 'all 0 7s ease'
        });
    }, function(){
        $('.slide.leaders .name').css({
            width: '100%',
            height: '60px',
            margin: '240px 0 0 0',
            transition: 'all 0.7s ease'
        });
        $('.slide.leaders .name h3').css({
            display: 'block',
            transition: 'all 0.7s ease'
        });
        $('.slide.leaders .name p').css({
            display: 'none',
            transition: 'all 0.7s ease'
        });
    });
});