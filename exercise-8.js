function pasanganTerbesar(num) {
  var i = 0;
  var j = 2;
  var k = 1;
  var l = 3;
  var string = num.toString();
  var bigger = 0;
  while (i < string.length-1){
      var store1 = string.slice(i,j);
      var store2 = string.slice(k,l);
      var integer1 = parseInt(store1);
      var integer2 = parseInt(store2);
      if (integer1 > integer2 && integer1 > bigger){
          bigger = integer1;
          // console.log(bigger);
      } else if (integer1 < integer2 && integer2 > bigger){
          bigger = integer2;
          // console.log(bigger);
      }
      i++
      j++
      k++
      l++
      // console.log(i,j,k,l);
  }
  return bigger;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99