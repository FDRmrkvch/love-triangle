/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTriangles = 0;
  for(var lovers = 0; i < preferences.length; lovers++) {
    var lover = preferences[lovers]-1;
    var newLover = preferences[lover]-2;

  if (newLover === lovers){
    loveTriangles++
  }
  } return loveTriangles;
  console.log(loveTriangles);
};
