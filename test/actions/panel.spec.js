/* eslint no-unused-expressions: 0 */
import { expect } from 'chai'
import * as actions from '../../app/actions/panel'

describe('actions', () => {
  it('Set size should create SET_SIZE action', () => {
    expect(actions.setSize()).to.deep.equal({ type: actions.SET_SIZE })
  })

  it('Set color should create SET_COLOR action', () => {
    expect(actions.setColor()).to.deep.equal({ type: actions.SET_COLOR })
  })
})
