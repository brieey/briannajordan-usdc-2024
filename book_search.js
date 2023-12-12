/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    let resultsArray = [];
    scannedTextObj.forEach(item => {
        item.Content.forEach(contentItem => {
            if(contentItem.Text.includes(searchTerm)){
                const resultObj = {
                    "ISBN": item.ISBN, 
                    "Page": contentItem.Page,
                    "Line": contentItem.Line
                };
                resultsArray.push(resultObj);
            }
        });
    });
    

    var result = {
        "SearchTerm": searchTerm,
        "Results": resultsArray
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


//Tests basic functionality and returns a match
//if there is a match results is going to be greater than one
const test3Result = findSearchTermInBooks("and", twentyLeaguesIn); 
  if(test3Result.Results.length >= 1){
    console.log("PASS: Test 3");
  } else{
    console.log("FAIL: Test 3");
    console.log("Expected: Length to be greater than or equal to 1");
    console.log("Received: ", test3Result.Results.length);
  }


  //Tests to see what happens when their is not a match found
  const test4Result = findSearchTermInBooks("purple", twentyLeaguesIn); 
  const test4ResultLen = test4Result.Results.length;
  const expectedTest4Result = 0;
  if(test4ResultLen == expectedTest4Result){
    console.log("PASS: Test 4");
  }else{
    console.log("FAIL: Test 4");
    console.log("Expected:", expectedTest4Result);
    console.log("Received:", test4ResultLen);
  }

  //Test for case sensitivity 
  const test5Result1 = findSearchTermInBooks("the", twentyLeaguesIn); 
  const test5Result2 = findSearchTermInBooks("The", twentyLeaguesIn); 
  if(test5Result1.Line != 8 && test5Result2.Line != 9){
    console.log("PASS: Test 5");
  }else{
    console.log("FAIL: Test 5");
    console.log("'the' should occur only on Line 9 and 'The' should only occur on Line 8");
  }
