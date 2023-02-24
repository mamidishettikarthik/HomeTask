/* ----------------------------------------Closures and Scopes----------------------

 We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
 var callbacks = createFunctions(5); // create an array, containing 5 functions
 callbacks[0](); // must return 0
 callbacks[3](); // must return 3

 */
function createFunctions(n) {

  const callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(() => i);
  }
  return callbacks;
}
//input:3
//output:3