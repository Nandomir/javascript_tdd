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

    // console.log(this.herbivore)
    return this.herbivore[0];
  },


  avgOffspringMoreThanTwo: function() {
    this.moreThanTwo = new Array();

    this.moreThanTwo = this.listOfDinosaurs.filter(function(dinosaur) { return (dinosaur.numOfOffspring > 2) 
    })

    // console.log(this.moreThanTwo)

    return this.moreThanTwo.length;
  }

  }

module.exports = Park;