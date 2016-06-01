export const ADD_DOT = 'ADD_DOT';

export const UNDO_EDITOR = 'UNDO_EDITOR';
export const REDO_EDITOR = 'REDO_EDITOR';

export function addDot(props) {
  return {
    ...props,
    type: ADD_DOT
  }
}

export function undo() {
  return {
    type: UNDO_EDITOR
  }
}

export function redo() {
  return {
    type: REDO_EDITOR
  }
}
