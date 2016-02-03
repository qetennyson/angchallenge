<!DOCTYPE html>
<html ng-app="gemStore"> <!-- Runs the store module when the DOM loads -->
	<head>
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.6-dist_3/css/bootstrap.min.css"></link>
		<link rel="stylesheet" type="text/css" href="custom.css"></link>
	</head>
	<body ng-controller="StoreController as store">
		<!-- Indicates that ng-controller runs the JS for DOM -->
		<div class="header">
			<h1>{{"Quincy's Magic Rock Emporium"}}</h1>
		</div>
			<div class="list-group-item" ng-show="!store.product.soldOut" id="products" ng-repeat="product in store.products">
				<!-- If the product is sold out, it will not appear in store (var gems), and at a later point in the assignment, we have made this a very handy looped array for populating dem virtual shelves. -->
				<h3>
					{{product.name}}
					<em class="pull-right">{{product.price | currency}}</em>
				</h3>
			
				<!-- If the product cannot be purchased, button will not appear, (var gems) -->
				
				<product-gallery></product-gallery>

				<button ng-show="product.canPurchase">Add to Cart</button>

				<product-tabs></product-tabs>

			</div>
			



		<!-- Moved Scripts to bottom of page for fastest loading -->
		<script type="text/javascript" src="angular.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.js"></script>
		
		<!-- ref to my webapp -->
		<script type="text/javascript" src="app.js"></script> 
		<script type="text/javascript" src="products.js"></script>

		

	</body>
</html>
