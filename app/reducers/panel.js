import debug from 'debug';
import {
  SET_COLOR,
  SET_SIZE
} from 'actions/panel'

const initialState = {
  color: 'rgba(200,200,200,1)',
  size: 8
};

export default function editor(state = initialState, action) {
  debug('dev')('I AM IN PANEL REDUCER');
  debug('dev')(action);
  switch (action.type) {
    case SET_SIZE:
      return { ...state,
        size: action.size
      };
    case SET_COLOR:
      return { ...state,
        color: action.rgba
      };
    default:
      return state
  }
}
