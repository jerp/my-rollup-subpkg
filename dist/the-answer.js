'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('constants');
var constant = require('constant');

// export the Answer to constant package
var memorize = function memorize(theAnswer) {
  constant.define('the-answer', theAnswer);
};
// export the Answer to constant package
var recall = function recall() {
  return constant.constant('the-answer');
};

// the answer
var theAnswer = constants.ENOPROTOOPT;
// export it to constant package
memorize(theAnswer);
// get the answer
var getTheAnswer = function getTheAnswer() {
  return theAnswer;
};

exports.theAnswer = theAnswer;
exports.getTheAnswer = getTheAnswer;
exports.recall = recall;
//# sourceMappingURL=the-answer.js.map
