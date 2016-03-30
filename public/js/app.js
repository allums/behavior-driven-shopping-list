window.onload = function(){

var basket = new ShoppingList();
//console.log(basket);
var newContent = basket.render();

};


function addToShoppingList(){
	
	var content = document.getElementById('content');
	var name = document.getElementById('name').value;
	var description = document.getElementById('description').value;
	var newBasket = new ShoppingListItem(name, description);
	var basket = new ShoppingList();
	basket.addItem(newBasket);
	var output = basket.render();
	content.innerHTML += output;
		
}
	
	

