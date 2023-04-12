const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/* const titleCased = (str) => {
   return tutorials
//   //return str.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
 }
*/

const titleCased=(first) => {
  let cap=tutorials.map((first)=> {
    first.split(" ");
    console.log(first.split(" "))
    return first
    .split(" ")
    .map((word)=> word[0].toUpperCase()+ word.substring(1))
    .join(" ")
  })
  return cap;
}


/*
const titleCase=tutorials.map((string) => {
  const wordArray=string.split(" ")
  const newWords= wordArray.map(word) => {
    if(word===word.toLowerCase()) 
    {
      return word.charAt(0).toUpperCase()+ word.slice(1);
    } else {
      return word;
    }
  }
  return newWords.join(" ")

})
*/
/*
function titleCased(str) {
  debugger
      let strCopyValue=[]
      for (let strValue of str){
                  
            var arr = strValue.split(' ');
          
            var newStr = '';
          
            for (var i = 0; i < arr.length; i++) {
              var lower = arr[i].toLowerCase();
              newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
          
            }
                strCopyValue.push(newStr)
      }
      debugger
      console.log(strCopyValue)
    return strCopyValue;
  }
  
  //titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  //titleCased(tutorials);

*/