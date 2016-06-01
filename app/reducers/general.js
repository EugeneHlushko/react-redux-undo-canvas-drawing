import {
  TOGGLE_COLORPICKER
} from 'actions/general'

const initialState = {
  showColorPicker: false
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COLORPICKER:
      return { ...state,
        showColorPicker: !state.showColorPicker
      };
    default:
      return state
  }
}
