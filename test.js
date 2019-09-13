function pasanganTerbesar(input) {
    debugger
    var output = 0;
    
    for (var i = 0; i < input.toString().length; i++) {
        for (var j = 2; j < input.toString().length; j++) {
            var integer1 = parseInt(input.toString().slice(i,i+2));
            var integer2 = parseInt(input.toString().slice(j,j+2));
            // if (integer1 > integer2 && integer1 > output) {
            //     output = integer1;
            // } else if (integer1 < integer2 && integer2 > output) {
            //     output = integer2;
            // }
        }
    }
    return integer1;
}