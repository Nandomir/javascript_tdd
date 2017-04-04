var assert = require('assert');
var Dinosaur =  require('../dinosaur.js');

describe('Dinosaur', function() {

  var dinosaur;

  beforeEach(function() {
  dinosaur = new Dinosaur('triceratops', 'herbivorous', 20)
  });

  it('should display dinosaur name', function(){
    assert.strictEqual('triceratops', dinosaur.name)
  });

  it('should display dinosaur type', function(){
    assert.strictEqual('herbivorous', dinosaur.type)
  });


});