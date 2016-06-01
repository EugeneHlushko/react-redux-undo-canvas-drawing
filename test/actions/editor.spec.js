/* eslint no-unused-expressions: 0 */
import { expect } from 'chai'
import * as actions from '../../app/actions/editor'

describe('actions', () => {
  it('add dot should create add ADD_DOT action', () => {
    expect(actions.addDot()).to.deep.equal({ type: actions.ADD_DOT })
  })

  it('undo should create UNDO_COUNTER action', () => {
    expect(actions.undo()).to.deep.equal({ type: actions.UNDO_COUNTER })
  })

  it('redo should create REDO_COUNTER action', () => {
    expect(actions.redo()).to.deep.equal({ type: actions.REDO_COUNTER })
  })
})
