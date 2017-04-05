var assert = require('assert');
var Dinosaur =  require('../dinosaur.js');

describe('Dinosaur', function() {

  var dinosaur;

  beforeEach(function() {
  dinosaur = new Dinosaur('triceratops', 'herbivorous', 1)
  });

  it('should display dinosaur name', function(){
    assert.strictEqual('triceratops', dinosaur.name)
  });

  it('should display dinosaur type', function(){
    assert.strictEqual('herbivorous', dinosaur.type)
  });

  it('should display dinosaur offspring', function() {
    assert.strictEqual(1, dinosaur.numOfOffspring)
  });


});