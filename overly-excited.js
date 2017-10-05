// Create an array that contains the words in the sentence
var sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
var whichCharacter = "!";
var betterSentence = ["I'll","chase","him","round","the","moons","of","nibia","and","round","the","antares","malestrom","and","round","perditions","flames","before","I","give","him","up"]
/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray, character) {
    let fullSentence = ""
    let wordCount = 1
    let exclamationCount = 0
    let exclaim = ""
        for (let index = 0; index < theWordArray.length; index++) {
            let word = theWordArray[index];
            /* Determine if The remainder of WordCount is equal to 0 to add exclamation points (every 3rd word)*/
            if ((wordCount % 4) === 0) {
                /* Determine the amount of exclamation points needed by dividing 3 by wordCount */
                let exclamationCount = (3/wordCount)
                /* loop through to create the number of characters needed */
                    for (let index = 0; index < exclamationCount; index++) {
                       exclaim = exclaim + character
                    }
                fullSentence = fullSentence+" "+word+exclaim
            }
            else fullSentence = fullSentence+" "+word
            console.log(fullSentence)
            wordCount++
            
            
    }
}

// Invoke the function and pass in the array
addExcitement(betterSentence, whichCharacter);