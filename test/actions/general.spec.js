/* eslint no-unused-expressions: 0 */
import { expect } from 'chai'
import * as actions from '../../app/actions/general'

describe('actions', () => {
  it('Toggle color picker should create TOGGLE_COLORPICKER action', () => {
    expect(actions.toggleColorpicker()).to.deep.equal({ type: actions.TOGGLE_COLORPICKER })
  })
})
