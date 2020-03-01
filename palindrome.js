//function that say if a word is a palindrome
const palindrome = s =>{
    let word = s.split('');
    let loopNumber = Math.floor(word.length);
    for(i = 0, j=word.length-1; i< loopNumber; i++, j--){
        if(word[i] !== word[j]){
            return `${s} is not a palindrome !`
        }else{
            return `${s} is a palindrome !`
        }
    }
}

console.log(palindrome("toot"));

//author : Bilal Akar