// ✅ Remove duplicate characters

function duplicate(str) {
    let result = "";
    let seen = new Set()


    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!seen.has(char)) {   // it checks whether the character is present , if present true  !seen.has return false 
            result += char;  // here we add character to result if not present by if check
            seen.add(char) // after adding char to result we add to seen for second iteratives 
        }
    }
    return result;
}

console.log(duplicate("programming"))