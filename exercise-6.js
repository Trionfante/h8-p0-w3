// Logic Challenge: Number Palindrome

    function angkaPalindrome(num){
        if (isNaN(num)) {
            return 'please input number.'
        } else {
            var input = num.toString();

            function reverse(input){
                var reverse ='';
                for (let i = input.length -1; i>=0; i--){
                    reverse = reverse + input[i];
                }
                if (reverse == input){
                    return true;
                } else {
                    return false;
                }
            }

            result = reverse(input);

            if (result == false){
                // console.log(num + ' is not palindrome, looking for the next palindrome...');
                while (result == false){
                    num++
                    input = num.toString();
                    result=reverse(input);
                }
                // return num+' is palindrome';
                return num;
            } else if (result == true){
                // console.log(num + ' is palindrome, yet looking for the next palindrome...')
                result = false;
                while (result == false){
                    num++;
                    input = num.toString();
                    result=reverse(input);
                }
                // return num+' is the next palindrome';
                return num;
            }
        }
    }

    console.log(angkaPalindrome(8)); // 9
    console.log(angkaPalindrome(10)); // 11
    console.log(angkaPalindrome(117)); // 121
    console.log(angkaPalindrome(175)); // 181
    console.log(angkaPalindrome(1000)); // 1001
    console.log(angkaPalindrome('nAn'));

// End of Number Palindrome