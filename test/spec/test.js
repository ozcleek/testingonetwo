/* global describe, it */
/* global describe, it */
 
(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'})
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an arguemnt other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });
      });
 
      describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function(){
          var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeAdded);
          expect(students.add({name: 'Jimmy', id: '3'})).to.equal({name: 'Jimmy', id: '3'})
        });

        it("should increase the models property's length by 1", function(){
          var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeAdded)
          students.add({name: 'Jimmy', id: '3'})
          expect(students.models.length).to.equal(3)
         });

         it("should not accept an empty object as an argument", function(){
          var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeAdded)
          expect(function(){students.add({})}).to.throw(Error);
     	});

        it("should throw an error when given an object without an id property", function(){
          var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeAdded)
          expect(function(){students.add({name: 'Jimmy'})}).to.throw(Error);
     	});
      });
 
      describe("has a .remove() method", function(){
        it("should, when given an id, remove the corresponding object from the models property", function(){
       	  var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
       	  var students = new Collection(toBeRemoved);
       	  students.remove('2');
       	  expect(students.models[1]).to.be.equal.to(undefined);
        });
        
        it("should decrease the models property's length by 1", function(){
          var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          students.remove('2');
          expect(students.models.length).to.equal(1);
      });

        it("should throw an error when given an argument that's not a string", function(){
          var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });

        it("should return true on successful removal", function(){
          var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          expect(students.remove('1')).to.equal.true
        }); 
      });

      describe('has an .empty() method', function(){
		it('should clear out the models array', function(){
		  var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          students.empty();
          expect(students.models).to.equal([])
        });

        it('should return true on successful empty', function(){
          var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          students.empty();
          expect(_.isEmpty(students.models)).to.equal(true)
        });
	  });

	  describe("has a .random() method", function(){
		it ('should return a random object from the models array', function(){
		  var toBeRemoved = [{name: 'Bower', id: '1'},{name: 'Jack', id: '2'}];
          var students = new Collection(toBeRemoved);
          students.random();
          expect(students.models).to.be.random;

		});
	  });

	  describe('has a .length() method', function(){
		it('should return the length models array', function(){
			var toBeAdded = [{name: 'Bower', id: '1'}, {name: 'Jack', id:'2'}, {name: 'Jimmy', id: '3'}];
			var students = new Collection(toBeAdded);

			expect(students.length()).to.equal(3)
		});
      });

    })
})();

