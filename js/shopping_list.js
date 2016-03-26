var ShoppingListItem = function(name, description){

	this.name = name;
	this.description = description;
	this.is_done = false;

	this.check = function(){
		this.is_done = true;
		return this.is_done;
	};
	this.uncheck = function(){
		this.is_done = false;
		return this.is_done;
	};

	this.render = function(){
		var wording = '<li class="completed_false"><span>'+this.name+'</span><span>'+this.description+'</span></li>';
		return wording;
	};
console.log(this.name);
};


var ShoppingList = function(product){

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
		if (product instanceof ShoppingListItem){
			var removed = this.items.indexOf(product);
			this.items.splice(removed, 1);
			console.log(this.items);
			return this.items;
		}
		else {
			throw new Error('this item is not in the list');
		}
	};



};










