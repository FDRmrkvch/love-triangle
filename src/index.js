/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var loveTriangles = 0;

  for(var lovers = 0; lovers < preferences.length; lovers++){

      var lover = preferences[lovers] - 1;
      var anotherLover = preferences[lover] - 1;
      var newAnotherLover = preferences[anotherLover] - 1;

  if (newAnotherLover === lovers){
      loveTriangles = loveTriangles + 1;
  }
  
  } return (Math.floor(loveTriangles/3));
  
};
