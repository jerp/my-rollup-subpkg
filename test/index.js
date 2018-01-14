import { expect } from 'chai'
import { theAnswer, getTheAnswer, recall } from '../dist/the-answer'

describe('the answer', () => {
  it('is supposed to be 42', () => {
    expect(theAnswer).to.eq(42)
    expect(getTheAnswer()).to.eq(42)
  })
})

describe('the answer from constant package', () => {
  it('is still supposed to be 42', () => {
    expect(recall()).to.eq(42)
  })
})
