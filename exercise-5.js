// Check Palindrome

    function palindrome(kata){
        var reverse = kata.split("").reverse().join("");
        if (reverse == kata){
            return true;
        } else {
            return false;
        }
    }

    console.log(palindrome('katak')); // true
    console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false

// End of Check Palindrome