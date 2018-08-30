var args = process.argv.slice(2);
var word = args.join("");


function countLetters(word) {
var arr = {};
for (var i = 0; i < word.length; i++) {
    var key = word[i]
    if (key in arr) {
        arr[key].push(i);
      }
    else {
      arr[word[i]] = [i];

      }
  }
  console.log(arr);
}
  countLetters(word);
