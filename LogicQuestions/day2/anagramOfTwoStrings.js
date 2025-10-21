// ✅ Check anagram of two strings

// Ex:- "listen" -> "silent" anagram
// steps 1 - 
//  converts both strings to lowercase, removes any spaces, punctuation, special char

// step -2 
//  if the lengths of the two strings are not equal , they cannot be anagrams
// if lengths are equal , continue

// step -3
// count the frequency of character each time appears in both string
// using map or array of letters

// step - 4
// Check if every character in the first string appears the same number of times in the second string.
// If all counts match → ✅ anagrams

function anagram(str, str2) {
    let s1 = str.toLowerCase().trim().split("").sort().join("");
    let s2 = str.toLowerCase().trim().split("").sort().join("");

    if (s1 === s2) {
        return "Anagrams";
    } else {
        return "Not anagrams"
    }

}

console.log(anagram("listen", "silent"));



    