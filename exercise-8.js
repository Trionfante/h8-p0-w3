    /*
    // Attempt 1
        function pasanganTerbesar(input) {
            var i = 0;
            var j = 2;
            var k = 1;
            var l = 3;
            var string = input.toString();
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
    // End of Attempt 1
    */

    /*
    // Attempt 2 make it more efficient with var usage
    function pasanganTerbesar(input) {
        debugger
        var output = 0;
        
        for (var i = 0; i < input.toString().length; i++) {
            for (var j = 2; j < input.toString().length; j++) {
                var integer1 = parseInt(input.toString().slice(i,i+2));
                var integer2 = parseInt(input.toString().slice(j,j+2));
                if (integer1 > integer2 && integer1 > output) {
                    output = integer1;
                } else if (integer1 < integer2 && integer2 > output) {
                    output = integer2;
                }
            }
        }
        return output;
    }
    // End of Attempt 2
    */

    // Attempt 3 PAKE INDEX TERUS DITAMBAHHHHHHHH
    function pasanganTerbesar(input) {
        debugger
        var output = 0;
        var length = input.toString().length;
        var array = input.toString().split('');
        
        for (var i = 0; i < length; i++) {
            for (var j = 2; j < length; j++) {
                var temp1 = array[i] + array[i+1];
                var temp2 = array[j] + array[j+1];
                if (temp1 > temp2 && temp1 > output) {
                    output = temp1;
                } else if (temp1 < temp2 && temp2 > output) {
                    output = temp2;
                }
            }
        }
        return output;
    }
    // End of Attempt 3

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99