var ShoppingList = function(){

	this.items = [];

	this.addItem = function(product){
		if (product instanceof ShoppingListItem) {
			this.items.push(product);
			console.log(this.items);
			return this.items;
		}
		else {
			throw new Error('this is not an item');
		}
	};

	this.removeItem = function(product){
		if (product === undefined){
			this.items.pop();
			return this.items;
		}
		if (product instanceof ShoppingListItem){
			var removed = this.items.indexOf(product);
			this.items.splice(removed, 1);
			console.log(this.items);
			return this.items;
		}
		else if (!(product instanceof ShoppingListItem)){
			console.log(product);
			throw new Error('this item is not in the list');
		}
	};

	this.render = function(){
		var returnHtml = '<ul>';
		for (var i = 0; i < this.items.length; i++){
			returnHtml += this.items[i].render();
		}
		returnHtml += '</ul>';
		return returnHtml;
	};
};










