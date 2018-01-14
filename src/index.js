import { ENOPROTOOPT } from 'constants' // builtin package
import { memorize, recall } from './memory' // internal package
// the answer
const theAnswer = ENOPROTOOPT
// export it to constant package
memorize(theAnswer)
// get the answer
const getTheAnswer = () => theAnswer
// not the answer
// const notTheAnswer = ENOSPC
// exports
export { theAnswer, getTheAnswer, recall }
