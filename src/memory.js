import { define, constant } from 'constant' // external package
// export the Answer to constant package
const memorize = (theAnswer) => { define('the-answer', theAnswer) }
// export the Answer to constant package
const recall = () => constant('the-answer')
export { memorize, recall }
