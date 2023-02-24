// ----------------------Using closures to share class state-------------------------

/* In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

 In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

 garfield = new Cat('garfield', 25);
 Cat.averageWeight(); // 25

 felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20   */

var Cat = (function () {
    // ... your code here.
     const cats = []
     const constructor = function (name, weight) {
       if (!name || !weight) throw Error('invalid parameters')
       Object.defineProperty(this, 'name', { get: () => name })
       Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
       cats.push(this)
     }
   
     constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
   
     return constructor;
   }());