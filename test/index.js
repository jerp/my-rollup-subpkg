import { expect } from 'chai'
import { theAnswer, getTheAnswer, recall, notTheAnswer } from '../dist/the-answer'

describe('the answer', () => {
  it('is supposed to be 42', () => {
    expect(theAnswer).to.eq(42)
    expect(getTheAnswer()).to.eq(42)
  })
  it('is not equal to the other answer', () => {
    expect(notTheAnswer).to.be.not.null
    expect(notTheAnswer).to.not.eq(theAnswer)
  })
})

describe('the answer from constant package', () => {
  it('is still supposed to be 42', () => {
    expect(recall()).to.eq(42)
  })
})
