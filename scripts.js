/**
 * Scripts for 2014 Annual Report	
 * Author: Addison Benzshawel / UIF
 */
$(function() {
	// initialize isotope 
	var $container = $('#container').isotope({
		itemSelector: '.slide',
		layoutMode: 'fitRows',
		getSortData: {
			name: '.name',
			category: '[data-category]',
			weight: function( itemElem ) {
				var weight = $( itemElem ).find('.weight').text();
				return parseFloat( weight.replace( /[\(\)]/g, '') );
				}
			}
	});
	// randomize slide order on page load
	var order_options = ['original-order', 'name', 'category'];
	var sortValue = order_options[Math.floor(Math.random()*order_options.length)];
	console.log(sortValue);
	$container.isotope({ sortBy: sortValue });
});