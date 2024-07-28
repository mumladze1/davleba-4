
// davaleba 1

let replace =(string, valueToReplace, valueToReplaceWith) =>{
    let index = string.indexOf(valueToReplace)
    let newString = string
          .substr(0 , index)
          + valueToReplaceWith
          + string.substr(index + valueToReplace.length)
    
    
    
          return newString


}

console.log(replace(' me gavdivar beckend kurss','beckend','frontend')) 

  



//  davaleba 2

function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


const sentence = "hello lecturer! how are you?";
const theend = capitalizeWords(sentence);
console.log(theend); 






// daveleba3

const userArray = [
  {name:'dachi', age:17},
  {name:'rati' , age:19},


];
function sortByAge( users){
     return users.slice().sort((a,b) => a.age - b.age) ;

}
console.log(userArray)















