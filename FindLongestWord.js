//Algorithm that find the longest word in a string

const longestWord = string => {
    let longest = "";
    let words = string.split(' ')
    words.forEach(word => { (word.length > longest.length) && (longest = word) });
    return longest;
}

console.log(longestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));

//author : Bilal Akar