const rawMessages = [
    "  We_Love#JavaScript!! ",
    "CODING-is-LIFE  ",
    " 123__Clean#This__TeXT! "
  ];

function cleanMessages(arr) {
    let cleanedWords = [] ;
    let specialChar = ["_","#","!","-","1","2","3","4","5","6","7","8","9","0",]

    for (word of arr) {
        for ( letter of word ) {
           for (i of specialChar) {
             if (i == letter) {
                word = word.replace(i," ")
            
             }
           }
           
        }

        console.log(word.trim())
    }

    return cleanedWords
}

cleanMessages(rawMessages)