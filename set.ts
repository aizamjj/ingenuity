var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

// O(1)
setPrototype.add = function(item) {
  if (!this.storage.item) {
    // store the new item at the current set storage
    this.storage.item = item;
  }
};

// O(1)
setPrototype.contains = function(item) {
  // if the current set has key at item === item
  if (this.storage.item) {
    return true;
  }

  return false;
};

// O(1)
setPrototype.remove = function(item) {
  delete this.storage.item;
};

/*
* Complexity: What is the time complexity of the above functions?
*/

