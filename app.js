(function(){

	
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	/* This didn't begin as an array, but near the end of assignment 1 at
	code school, we found out that a loop makes it much easier to populate 
	our store. */

	var gems = [
		{
			name: 'Azurite', 
			price: 110.50.toFixed(2),
			description: "IT'S A FREAKIN MINERAL, MARIE.",
			canPurchase: false,
			soldOut: true
		},
		{
			name: 'Bloodstone',
			price: 1099.99.toFixed(2),
			description: "Popular on Storm Spirit, don't right click.",
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Zircon',
			price: 2.95.toFixed(2),
			description: "Sounds like some Star Trek shit.",
			canPurchase: true,
			soldOut: false
		}
	];

})();
