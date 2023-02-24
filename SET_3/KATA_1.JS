/*                            -----Prefill an Array--------


 Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

 You have to validate input:

 v can be anything (primitive or otherwise)
 if v is ommited, fill the array with undefined
 if n is 0, return an empty array
 if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError  */


function prefill(n, v) {
    if (isNaN(parseInt(n)) || n % 1 !== 0 || n < 0) {
      throw new TypeError(`${n} is invalid`);
    }
    return Array.from({ length: n }).fill(v);
  }
  // input:prefill(3,1)
  // output: [1,1,1]