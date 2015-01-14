# markov
NodeJS n-order Markov chains


## Usage

```Javascript
var Markov = require('markov');

var markov = new Markov();

// or optionally pass parameters
var markov = new Markov({order:2, element:'word'});


//Add element to chain  (if "word")
markov.addToChain("audrey");
markov.addToChain("markov");
// or "sentence"
markov.addToChain("The cat sat on the mat.");

// or add array of element ("word")
markov.addArrayToChain(["hello","audrey","markov"]);

//or ("sentence")
markov.addArrayToChain(["Fuzzy Wuzzy was a bear,","Fuzzy Wuzzy had no hair.","Fuzzy Wuzzy wasn't fuzzy was he?"]);


// ask the chain to pass you back a new word/sentences based on you input
markov.ask();

// or optionally pass paraemeters
markov.ask({seed:"T", min:3, max:10});  
//passes back word/sentence starting with T, length of element minimum 3 - maximum 10.

```

## Options
#### new Markov()
parameter|type|default|description
---|---|:---:|:---
order|{integer}|2|Order of the Markov chain
element|{string}|'word'|Type of elements in chain - either word, sentances, other

####ask()
parameter|type|default|description
---|---|:---:|---
seed|{string}|''|Seed element
min|{integer}||Minimum length of reponse
max|{integer}||Maximum length of reponse



## Further details
Check out the tests for more examples.
