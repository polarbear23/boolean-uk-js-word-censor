const text = prompt("Type a sentence you want to censor?");
const wordsToCensor = prompt("Words you would like to censor? Separate them with spaces");
const replacementWord = prompt("What word would you like to replace the previous words with?");

const censor = (textToCensor, wordsToCensor, censorWord) =>{
  const sentence = textToCensor.split(" ");
  const wordsToReplace = wordsToCensor.split(" ");
  console.log(sentence);
  console.log(wordsToReplace);
  let newSentence = "";
  for(let i = 0; i < sentence.length; i++){
      for(let j = 0; j < wordsToReplace.length; j++){
        if(sentence[i] === wordsToReplace[j]){
         sentence.splice(i, 1, censorWord);
      }
    }
  }
  for(let i = 0; i< sentence.length; i++){
    newSentence = newSentence + " " + sentence[i];
  }
 // console.log(newSentence);
  return newSentence;
}

console.log(censor(text , wordsToCensor, replacementWord));




/*
const censor = (textToCensor, wordsToCensor, censorWord) =>{
  for(let i = 0; i< wordsToCensor.length; i++){
      textToCensor = textToCensor.replaceAll(wordsToCensor[i], censorWord);
  }
  return textToCensor;
}

console.log(censor(text , wordsToCensor, "ZAPPP!!!"));

*/