import { ENOPROTOOPT } from 'constants'; // builtin package
import { memorize, recall } from './memory'; // internal package
import consts from './consts.json'; // somthing that will have to be packaged
// the answer
var theAnswer = ENOPROTOOPT;
// export it to constant package
memorize(theAnswer);
// get the answer
var getTheAnswer = function getTheAnswer() {
  return theAnswer;
};
// not the answer
var notTheAnswer = consts.notTheAnswer;
// exports

export { theAnswer, getTheAnswer, recall, notTheAnswer };