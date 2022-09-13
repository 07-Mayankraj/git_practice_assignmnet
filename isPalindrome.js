function isPalindrome(str){
    let j = str.length -1;
    let flag = true;
    for (let i = 0; i<=str.length/2;i++, j--){
        if(str[i] != str[j]){
            flag = false;
            break;
        }
    }
    console.log(flag? "Yes" : "No")
}

isPalindrome('aba');