window.onload = function(){

var basket = new ShoppingList();
//console.log(basket);

var newContent = basket.render();



	






};

function addToShoppingList(){

	console.log('added to shopping list');
	var name = document.getElementById('name').value;
	var description = document.getElementById('description').value;
	console.log(name, description);
	var shoppingItem = document.createElement('div');
	shoppingItem.innerHTML = name + description;
	var content = document.getElementById('content');
	content.appendChild(shoppingItem);
	
	
}