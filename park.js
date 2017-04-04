var Park = function(){
  this.listOfDinosaurs = new Array();
}

Park.prototype = {
  add: function(dinosaur) {
    this.listOfDinosaurs.push(dinosaur)
  }
}

module.exports = Park;