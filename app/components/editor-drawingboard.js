import React, { Component, PropTypes } from 'react'
import debug from 'debug'

export default class EditorDrawingboard extends Component {

  static propTypes = {
    addDot: PropTypes.func.isRequired,
    toggleColorpicker: PropTypes.func.isRequired,
    showColorPicker: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    canvasSize: PropTypes.object.isRequired
  };

  state = {
    mouseDown: false,
    tempDots: []
  }

  onClick = (e) => {
    debug('dev')(e);
    // also add a dot, wait for more editor tools to be prepared
  }

  mouseIsMoving = (e) => {
    const y = e.pageY - 66;
    const x = e.pageX - this.refs.board.offsetLeft;
    const color = this.props.color;
    const size = this.props.size;

    if (this.state.mouseDown) {
      // debug('dev')(`mouse moving over drawing board, color: ${ color }`);
      this.state.tempDots = [
        ...this.state.tempDots,
        {
          x,
          y,
          color,
          size
        }
      ];

      // draw more dots added to temporary canvas
      const canvas = this.refs.ctx;
      const ctx = (canvas) ? canvas.getContext('2d') : false;
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }

  saveDots = () => {
    if (this.state.tempDots.length === 0) {
      return false;
    }

    // push dots to actual state
    const { addDot } = this.props;
    addDot({
      dots: this.state.tempDots
    });
    // clear old data
    const canvas = this.refs.ctx;
    const ctx = (canvas) ? canvas.getContext('2d') : false;
    ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.state.tempDots = [];

    return true;
  }

  mouseAction = (e) => {
    this.state.mouseDown = e.type === 'mousedown';
    switch (e.type) {
      case 'mouseup':
        if (this.state.tempDots.length > 0) {
          this.saveDots();
        } else {
          this.mouseIsMoving(e);
        }
        break;
      case 'mouseleave':
        this.saveDots();
        break;
      case 'mousedown':
        this.props.showColorPicker && this.props.toggleColorpicker();
        break;
      default:
        return;
    }
  }

  render() {
    const { width, height } = this.props.canvasSize;

    return (
      <div
        ref='board'
        className='editor-drawingboard'
        onClick={ this.onClick }
        onMouseLeave={ this.mouseAction }
        onMouseDown={ this.mouseAction }
        onMouseUp={ this.mouseAction }
        onMouseMove={ this.mouseIsMoving }>
        <canvas ref='ctx' width={ width } height={ height } />
      </div>
    )
  }
}
