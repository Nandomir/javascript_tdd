var Park = function(){
  this.listOfDinosaurs = new Array();
}


Park.prototype = {
  add: function(dinosaur) {
    this.listOfDinosaurs.push(dinosaur)
  },


  removeCarnivours: function() { 
    this.herbivore = new Array();

    this.herbivore = this.listOfDinosaurs.filter(function(dinosaur){ return (dinosaur.type === 'herbivorous')
    })

    console.log(this.herbivore)
    return this.herbivore[0];
  }

  }

module.exports = Park;