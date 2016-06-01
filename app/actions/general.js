export const TOGGLE_COLORPICKER = 'TOGGLE_COLORPICKER';

export function toggleColorpicker(currentStatus) {
  return {
    ...currentStatus,
    type: TOGGLE_COLORPICKER
  }
}
