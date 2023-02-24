// -------------------------Get the Middle Character--------


// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  //Code goes here!
  var text_len = s.length;
  if (text_len % 2 != 0) 
  {
    let start = (text_len - 1) / 2;
    return s.slice(start, start + 1)
  } 
  else 
  {
    let start = text_len / 2 - 1;
    return s.slice(start, start + 2);
  }
}
// input:"test"
// output:es
