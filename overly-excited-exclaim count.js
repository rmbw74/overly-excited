// Create an array that contains the words in the sentence
var sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let fullSentence = ""
    let wordCount = 1
    let exclamationCount = 0
    let exclaim = ""
        for (let index = 0; index < theWordArray.length; index++) {
            let word = theWordArray[index];
            if ((wordCount % 3) === 0) {
                    for (let index = 0; index < exclamationCount; index++) {
                       exclaim = exclaim + "!"
                    }
                fullSentence = fullSentence+" "+word+exclaim
            }
            else fullSentence = fullSentence+" "+word
            console.log(fullSentence)
            wordCount++
            
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);