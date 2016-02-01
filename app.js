(function(){
	
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function() {
		this.products = gems;
	
	});

	app.controller('TabController',function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSet = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function(){
		this.current = 0;

		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	app.controller('ReviewController', function(){
		this.review={};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review.createdOn = Date.now();
			this.review = {};
		};

	});
/* source of the problem right now.  I feel like I can get around the security errors involved with
pulling from my URL for this directive if I can figure out the injector, and $sce.  But the injector,
just won't work right */

/* here's Chrome's output:
Error: [$injector:unpr] http://errors.angularjs.org/1.4.9/$injector/unpr?p0=%24scopeProvider%20%3C-%20%24scope%20%3C-%20productDescriptionDirective
    at Error (native)
    at ...... and it continues.  It indicates an issue with the injector here
    */

    /* Commented out, but usable directive with security error. 
	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'http://127.0.0.1:8887/product-description.html'
		
		};
	});
*/

		



	/* This didn't begin as an array, but near the end of assignment 1 at
	code school, we found out that a loop makes it much easier to populate 
	our store. */

	/*So in the beginning of 3.1, they merge all of the var gems into an array,
	and then just assign that array to this.products.  I am not going to do that right now,
	but I'll experiment with it at the end.  This works, so I'm not breaking it for now. */

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
			reviews: [
				{
					stars: 5,
					body: "So, I've recently become a mineral collector after recieving grievious injuries in my job at the DEA.  My godforsaken wife does not understand the nuances of this hobby, and always calls my minerals rocks.  I'm going to murder her.",
					author: "hank@hankthoughts.com"
				},
				{
					stars: 2,
					body: "Really not as impressed as I thought I'd be.",
					author: "tim@stinkybutt.com"
				}
			]
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
			],
			reviews: [
			{
				stars: 3,
				body: "Not bad, shiny gem.",
				author: "kotcha@man.com"
			},
			{
				stars: 4,
				body: "Not perfection, but a good gem nonetheless",
				author: "j@jay.com"
			}
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
			reviews: [
			{
				stars: 5,
				body: "I just love this gem",
				author: "excitedbygems@wow.com"
			},
			{
				stars: 1,
				body: "WORST. GEM. EVER.",
				author: "capslock@neanderthal.com"
			}
		]
		},
		{
			name: "Right Out d'Agate",
			price: 100.40.toFixed(2),
			description: 'shit is so rare we only have one picture',
			canPurchase: true,
			soldOut: false,
			images: [
				'agate.png'
			],
			reviews: [
			{
				stars: 5,
				body: "This gem will be the key to Azeroth's destruction",
				author: "arthas@frozenthrone.com"
			},
			{
				stars: 2,
				body: "It's just an agate, what's the big deal.",
				author: "guy@wizards.magic"
			}
		]
		}
	];

})();
