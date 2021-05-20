let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Split the string into individual words 
let storyWords = story.split(" ");

//Log how many words there are in this story to the console
console.log(`In this story are ${storyWords.length} words.`);

//Filter out the unnecessary words
let betterWords = storyWords.filter(word => {
  if (! unnecessaryWords.includes(word)) {
    return word;
  } 
});

//Count how many times was used 'overused' words
let counterReally = 0;
let counterVery= 0;
let counterBasically= 0;

for ( let word = 0; word < storyWords.length; word++){
 
  if (storyWords [word] === overusedWords [0]) { 
    counterReally += 1;
  } else if (storyWords [word] === overusedWords [1]) { 
    counterVery += 1;
  } else if (storyWords [word] === overusedWords [2]) { 
    counterBasically += 1;
  } 
}

console.log(`Overused word: Really was used ${counterReally} times, Very- ${counterVery} times and Basically- ${counterBasically} times.`);

//Count haw many sentences are in the paragraph
let sentencesCounter= 0;
for ( let sent = 0; sent < story.length; sent++) {
  if ( story [sent] === "." || story [sent] === "!") {
    sentencesCounter += 1;
  }
}
console.log(`In the paragraph are ${sentencesCounter} sentences.`);

console.log(betterWords.join(" "));