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

var notTheAnswer = 24;
var consts = {
	notTheAnswer: notTheAnswer
};

// the answer
var theAnswer = constants.ENOPROTOOPT;
// export it to constant package
memorize(theAnswer);
// get the answer
var getTheAnswer = function getTheAnswer() {
  return theAnswer;
};
// not the answer
var notTheAnswer$1 = consts.notTheAnswer;

exports.theAnswer = theAnswer;
exports.getTheAnswer = getTheAnswer;
exports.recall = recall;
exports.notTheAnswer = notTheAnswer$1;
//# sourceMappingURL=the-answer.js.map
