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
		var returnHtml = '<li class="completed_false"><span>'+this.name+'</span><span>'+this.description+'</span></li>';
		return returnHtml;
	};
console.log(this.name);
};