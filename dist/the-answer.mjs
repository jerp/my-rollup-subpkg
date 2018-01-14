import { ENOPROTOOPT } from 'constants';
import { constant as constant$1, define } from 'constant';

// export the Answer to constant package
var memorize = function memorize(theAnswer) {
  define('the-answer', theAnswer);
};
// export the Answer to constant package
var recall = function recall() {
  return constant$1('the-answer');
};

var notTheAnswer = 24;
var consts = {
	notTheAnswer: notTheAnswer
};

// the answer
var theAnswer = ENOPROTOOPT;
// export it to constant package
memorize(theAnswer);
// get the answer
var getTheAnswer = function getTheAnswer() {
  return theAnswer;
};
// not the answer
var notTheAnswer$1 = consts.notTheAnswer;

export { theAnswer, getTheAnswer, recall, notTheAnswer$1 as notTheAnswer };
//# sourceMappingURL=the-answer.mjs.map
