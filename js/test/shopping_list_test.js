describe('ShoppingListItem', function(){

	var item = null;

	beforeEach(function(){
		item  = new ShoppingListItem('apple', 'red');
	});	


	it('it should be a class', function(){
		expect(ShoppingListItem).to.be.a('function');
	});


	it("it should have a property called 'name'", function(){
		expect(item).to.have.property('name');
		expect(item.name).to.equal('apple');
	});


	it("it should have a property called 'description'", function(){
		expect(item).to.have.property('description');
		expect(item.description).to.equal('red');
	});


	it("the property 'is_done' should be false", function(){
		expect(item.is_done).to.be.false;
	});


	it("it should have a method called 'check'", function(){
		expect(item.check).to.be.a('function');
	});


	it("check method should return true", function(){
		expect(item.check()).to.be.true;
	});


	it("it should have a method called uncheck", function(){
		expect(item.uncheck).to.be.a('function');
	});


	it('uncheck method should return false', function(){
		expect(item.uncheck()).to.be.false;
	});


	it('it should have a method called render', function(){
		expect(item.render).to.be.a('function');
	});


	it('it should return a html formatted string', function(){
		expect(item.render()).to.equal('<li class="completed_false"><span>apple</span><span>red</span></li>');
		var avacado = new ShoppingListItem('avacado', 'fatty and green');
		expect(avacado.render()).to.equal('<li class="completed_false"><span>avacado</span><span>fatty and green</span></li>');
	});

}); //ends ShoppingListItem class


describe('ShoppingList', function(){

	var basket = null;

	beforeEach(function(){
		basket = new ShoppingList('pears');
	});


	it('should be a class', function(){
		expect(ShoppingList).to.be.a('function');
	});

	it('should have a property called items', function(){
		expect(basket).to.have.property('items');
	});

	it("items should return 'pears' in an array", function(){
		expect(basket.items).to.deep.equal([]);
	});

	describe('Add item method', function(){
		it('should have a method called addItem', function(){
			expect(basket.addItem).to.be.a('function');
		});

		it('items should be pushed to an array', function(){
			expect(basket.items.length).to.equal(0);
			var kiwiFruit = new ShoppingListItem('kiwi', 'tangy');
			expect(basket.addItem(kiwiFruit).length).to.equal(1);
			expect(basket.items).to.contain(kiwiFruit);
		});
	});
		
		
	it('items that are not a ShoppingListItem should throw error', function(){
		expect(basket.addItem.bind(basket)).to.throw(Error, 'this is not an item');
	});

	describe('remove item method', function(){

		it('should have a method called removeItem', function(){
			expect(basket.removeItem).to.be.a('function');
		});

		it('should remove an item from the items array when invoked', function(){
			var orange = new ShoppingListItem('orange', 'juicy');
			var apple = new ShoppingListItem('dark green', 'sour');
			expect(basket.addItem(orange).length).to.equal(1);
			expect(basket.addItem(apple).length).to.equal(2);
			expect(basket.removeItem(orange).length).to.equal(1);
			expect(basket.items).to.contain(apple);
			expect(basket.items).to.not.contain(orange);
		});


		it('if no item is passed in, the last item in the list will be removed', function(){
			var orange = new ShoppingListItem('orange', 'juicy');
			var apple = new ShoppingListItem('dark green', 'sour');
			expect(basket.addItem(orange).length).to.equal(1);
			expect(basket.addItem(apple).length).to.equal(2);
			expect(basket.removeItem()).to.equal(1);
		});


		it('items that are not in the items array should throw an error', function(){
			expect(basket.removeItem.bind(basket)).to.throw(Error, 'this item is not on the list');
		});

		
		
	});

});
		

		






