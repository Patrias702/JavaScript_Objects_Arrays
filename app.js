

// Exercise 1: The Sum of an Array 
const numbers = [2, 22, 12, 17, 18, 39, 129,]

function arraySum(arr){
    let sum = 0;


    // iterarte over each value in the array 
    // use each number in the sum   
    arr.forEach((number) => {
        sum += number;
    
    });

    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1,2,3,4,5,]));

// Exercise 2 : Favorite Book 

let favBook = {};


favBook.title = "The Hobbit"
favBook.author = "J.R.R Tolkien"
favBook.pageCount = 295;
favBook.readCount = 3;

console.log(favBook);


favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
}

console.log(favBook.info());


// Exercise 3: Reverse A String 
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence){
    let result = [];
// Identify the words based on spaces
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    let letters = words [i].split (""); 
    letters.reverse();
    let reverseWord = letters.join("");
   result.push(reverseWord);
 }
 return result.join(" ");
}

console.log(reverseWords(sentence)); 


//Exercise 4: Parse a CSV 

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data){


    let headers = data.slice(0, data.indexOf("\n")).split(","); 

    let valuesList = data.slice(data.indexOf("\n") + 1 ).split("\n");


    const customArr = valuesList.map((row) =>{
        let values = row.split(",");
        let obj={}

        values.forEach((col,idx) => {
            if (idx < headers.length){
                obj[headers[idx]]= col;
            } else {
                obj[`misc${idx}`] = col;
            }
            });

            return obj;
    });
    return customArr;
}

console.log(csvConverter(csvData));




