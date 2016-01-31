(function(){
	
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('TabController',function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSet = function(checkTab){
			return this.tab === checkTab;
		}

	app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

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
			soldOut: true,
			images: [

				'gem-02.gif',
				'gem-05.gif',
				'gem-09.gif'
			],
		},
		{
			name: 'Bloodstone',
			price: 1099.99.toFixed(2),
			description: "Popular on Storm Spirit, don't right click.",
			canPurchase: true,
			soldOut: false,
			images: [
				'gem-01.gif',
				'gem-03.gif',
				'gem-04.gif'
			]
		},
		{
			name: 'Zircon',
			price: 2.95.toFixed(2),
			description: "Sounds like some Star Trek shit.",
			canPurchase: true,
			soldOut: false,
			images:[
			
				'gem-06.gif',
				'gem-07.gif',
				'gem-10.gif'

			],
		},
		{
			name: "Right Out d'Agate",
			price: 100.40.toFixed(2),
			description: 'shit is so rare we only have one picture',
			canPurchase: true,
			soldOut: false,
			images: [
				'agate.png'
			]
		}
	];

})();
