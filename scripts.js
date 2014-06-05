/**
 * Scripts for 2014 Annual Report	
 * Author: Addison Benzshawel / UIF
 */
$(function() {
	// randomize slide order on page load
	var order_options = ['original-order', 'name', 'category'];
	var sortValue = order_options[Math.floor(Math.random()*order_options.length)];
	console.log(sortValue);
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

});