//object
var word = {
  secretWord: '',
  current: [],
  count: 0,
  list: ['sushi', 'pizza', 'tteokbokki', 'tacos', 'ramen', 'coffee', 'dumplings', 'pasta', 'takoyaki', 'croissant', 'pancakes', 'waffles', 'steak', 'boba']
};

//picking the random word from the object list
x = Math.floor(Math.random() * word.list.length);
 word.secretWord = word.list[x];
 //console.log(word.secretWord.length);

 //word.secretWord = this.list[word.getSecretWord];
//var current = [];
//var count = 0;

//x = Math.floor(Math.random() * this.list.length);
//secret = word[x];

console.log(word.secretWord); //just for my testing purposes
//console.log(word.secretWord[3]);

word.getBlanks = function() {
  for(var y=1; y<=this.secretWord.length; y++) {
  this.current.push('_');
  }
}

word.getBlanks();

word.guessLetter = function(letter) {
  for(var i=0; i<=this.secretWord.length; i++) {
    if(letter === this.secretWord[i]) {
      this.current[i] = letter;
      console.log('* you got one! *');
    }
  }
  console.log(this.current);
  //console.log(this.current.toString());
  if(this.current.join("") === this.secretWord) {
    console.log('YAY! YOU WIN! :D');  //user feedback
  } else {
    this.count++;
    console.log('~ keep guessing ~');  //user feedback
  }
  if(this.count==8) {
    console.log('game over :('); //user feedback
  }
}
//console.log(word.current);

word.guessLetter('x');
word.guessLetter('a');
word.guessLetter('e');
word.guessLetter('i');
word.guessLetter('o');
//word.guessLetter('w');
word.guessLetter('s');
//word.guessLetter('y');
//word.guessLetter('d');
//word.guessLetter('j');
word.guessLetter('z');
word.guessLetter('p');


