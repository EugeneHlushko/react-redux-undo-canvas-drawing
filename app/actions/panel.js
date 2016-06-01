export const SET_COLOR = 'SET_COLOR';
export const SET_SIZE = 'SET_SIZE';

export function setSize(size) {
  return {
    ...size,
    type: SET_SIZE
  }
}

export function setColor(color) {
  return {
    ...color,
    type: SET_COLOR
  }
}
