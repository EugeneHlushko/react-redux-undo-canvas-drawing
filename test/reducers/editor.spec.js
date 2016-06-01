import { expect } from 'chai'
import editor from '../../app/reducers/editor'
import { ADD_DOT } from '../../app/actions/editor'

describe('reducers', () => {
  describe('counter', () => {
    const initialState = {
      texts: [],
      dots: []
    };

    it('should handle initial state', () => {
      expect(counter(undefined, {}).addDot).to.equal(initialState)
    })

    const testState = {
      texts: [],
      dots: []
    };

    const newDot = {
      color: 'rgba(200,200,200,1)',
      size: 10,
      x: 5,
      y: 10
    };

    const testStateWithDot = {
      texts: [],
      dots: [
        newDot
      ]
    }

    it('should handle ADD_DOT', () => {
      expect(counter(testState, { type: ADD_DOT, dots: [newDot] }).addDot).to.equal(testStateWithDot)
    })

    it('should handle unknown action type', () => {
      expect(counter(testState, { type: 'unknown' }).addDot).to.equal(testState)
    })
  })
})
