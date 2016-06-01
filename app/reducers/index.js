import { combineReducers } from 'redux'
import editor from 'reducers/editor'
import panel from 'reducers/panel'
import general from 'reducers/general'
import {
  UNDO_EDITOR, REDO_EDITOR, ADD_DOT
} from 'actions/editor'
import undoable, { includeAction } from 'redux-undo'

const rootReducer = combineReducers({
  editor: undoable(editor, {
    filter: includeAction([ ADD_DOT ]),
    limit: 50,
    debug: true,
    undoType: UNDO_EDITOR,
    redoType: REDO_EDITOR
  }),
  panel,
  general
});

export default rootReducer
