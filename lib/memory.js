import { define, constant } from 'constant'; // external package
// export the Answer to constant package
var memorize = function memorize(theAnswer) {
  define('the-answer', theAnswer);
};
// export the Answer to constant package
var recall = function recall() {
  return constant('the-answer');
};
export { memorize, recall };