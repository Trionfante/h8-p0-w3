function tentukanDeretGeometri(arr) {
    debugger
    var j = 1;
    for (var i = 0; i < arr.length-1; i++) {
        var gap = arr[1] / arr[0];
        if (arr[j] != (arr[i] * gap)) {
            return false;
        }
        j++;
    } return true;
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false