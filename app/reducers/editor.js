import {
  ADD_DOT
} from 'actions/editor'
import debug from 'debug'

const initialState = {
  texts: [],
  dots: []
}

export default function editor(state = initialState, action) {
  switch (action.type) {
    case ADD_DOT:
      debug('dev')(
        { ...state,
          dots: [
            ...state.dots,
            ...action.dots
          ]
        }
      );
      return { ...state,
        dots: [
          ...state.dots,
          ...action.dots
        ]
      };
    default:
      return state
  }
}
