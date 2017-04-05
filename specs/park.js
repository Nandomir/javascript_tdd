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
    triceratops = new Dinosaur('triceratops', 'herbivorous', 2);
    velociraptor = new Dinosaur('velociraptor', 'carnivorous', 5);
    tyrannosaurus = new Dinosaur('tyrannosaurus', 'carnivorous', 3);
  })

  it('should start an empty park', function() {
    assert.strictEqual(undefined, park.listOfDinosaurs[0])
  });

  it('should add a dinosaur to the park', function() {
    park.add(triceratops);
    assert.strictEqual(triceratops, park.listOfDinosaurs[0])
  })

  it('should remove carnivorous dinosaurs', function() {
    park.add(triceratops);
    park.add(velociraptor);
    park.add(tyrannosaurus);

    assert.strictEqual(triceratops, park.removeCarnivours())
  })

  it('should get all the dinosaurs with an offspring > 2', function() {
    park.add(triceratops);
    park.add(velociraptor);
    park.add(tyrannosaurus);

    assert.strictEqual(2, park.avgOffspringMoreThanTwo())
  })


})