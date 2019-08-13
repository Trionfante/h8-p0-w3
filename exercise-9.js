    // Following exercise direction, decimals to be rounded up (using .ceil)

    function cariMean(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++){
            total = total + arr[i];
        }
        return Math.ceil(total / arr.length);
    }

    /*
    the 4th console.log(cariMean([1, 3, 3])) equals to:
        > (1 + 3 + 3)/3
        > 7 / 3
        > 2.333
        > rounded up using .ceil will result in 3 instead of 2 as stated in // TEST CASES.
    */
   
    // End of .ceil

    // Following example from // TEST CASES rounded nearest (using .round)

    function cariMean(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++){
            total = total + arr[i];
        }
        return Math.round(total / arr.length);
    }

    // End of .round

// TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7