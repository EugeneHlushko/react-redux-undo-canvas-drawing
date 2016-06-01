import React, { Component, PropTypes } from 'react';
import ColorPicker from 'react-color';

require('styles/components/panel.scss');

export default class EditorPanel extends Component {

  static propTypes = {
    toggleColorpicker: PropTypes.func.isRequired,
    showColorPicker: PropTypes.bool.isRequired,
    setColor: PropTypes.func.isRequired,
    setSize: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  };

  handlePickerState = () => {
    this.props.toggleColorpicker({
      showColorPicker: this.props.showColorPicker
    });
  }

  handleColorChange = (clrData) => {
    const color = `rgba(${ clrData.rgb.r }, ${ clrData.rgb.g }, ${ clrData.rgb.b }, ${ clrData.rgb.a })`;
    this.props.setColor({
      rgba: color
    });
  }

  handleSizeChange = (e) => {
    if (e.target.value !== this.props.size) {
      this.props.setSize({
        size: e.target.value
      });
    }
  }

  render() {
    const { undo, redo, showColorPicker, color, size } = this.props;
    const bufferedSize = size > 66 ? 66 : size;

    return (
      <div className='panel'>
        <div onClick={ undo } className='panel-button undo'>
          UNDO
        </div>
        <div onClick={ redo } className='panel-button redo'>
          REDO
        </div>

        { showColorPicker
          ? <div className='panel-colorpicker'>
            <ColorPicker color={ color }
              type='photoshop'
              onChangeComplete={ this.handleColorChange } />
            </div>
          : null
        }
        <div className='panel-opacity'>
          <input
            type='text'
            value={ size }
            onChange={ this.handleSizeChange } />
        </div>
        <div className='panel-currentcolor'
          style={ { backgroundColor: color } }
          onClick={ this.handlePickerState }>
        </div>
        <div className='panel-brushpreview'>
          <div className='panel-brushpreview-dot'
            style={ {
              backgroundColor: color,
              width: `${ bufferedSize }px`,
              height: `${ bufferedSize }px`
            } }>
          </div>
        </div>
      </div>
    )
  }
}
