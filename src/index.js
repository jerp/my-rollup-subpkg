import { ENOPROTOOPT } from 'constants' // builtin package
import { memorize, recall } from './memory' // internal package
import consts from './consts.json' // somthing that will have to be packaged
// the answer
const theAnswer = ENOPROTOOPT
// export it to constant package
memorize(theAnswer)
// get the answer
const getTheAnswer = () => theAnswer
// not the answer
const { notTheAnswer } = consts
// exports
export { theAnswer, getTheAnswer, recall, notTheAnswer }
