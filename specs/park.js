var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('Park', function(){

  var park;
  var triceratops;
  var velociraptor;
  var tyrannosaurus;

  beforeEach(function(){
    park = new Park();
    triceratops = new Dinosaur('triceratops', 'herbivorous', 20);
    velociraptor = new Dinosaur('velociraptor', 'carnivorous', 30);
    tyrannosaurus = new Dinosaur('tyrannosaurus', 'carnivorous', 5);
  })

  it('should start an empty park', function() {
    assert.strictEqual(undefined, park.listOfDinosaurs[0])
  });


})