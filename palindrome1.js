var num = 8;
var input = num.toString();

function reverse(num){
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
    console.log(num + ' is not palindrome, looking for the next palindrome...');
    while (result == false){
        num++
        input = num.toString();
        result=reverse(input);
    }
    console.log(num+' is palindrome');
} else if (result == true){
    console.log(num + ' is palindrome, yet looking for the next palindrome...')
    result = false;
    while (result == false){
        num++;
        input = num.toString();
        result=reverse(input);
    }
    console.log(num+' is the next palindrome');
}