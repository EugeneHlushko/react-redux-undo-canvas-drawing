import React, { Component, PropTypes } from 'react'

export default class EditorCanvas extends Component {

  static propTypes = {
    dots: PropTypes.array.isRequired,
    canvasSize: PropTypes.object.isRequired
  };

  renderObjects = () => {
    const { dots } = this.props;
    const canvas = this.refs.ctx;
    const ctx = (canvas) ? canvas.getContext('2d') : false;
    ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dots.length > 0 && ctx) {
      for (const dot of dots) {
        ctx.beginPath();
        ctx.fillStyle = dot.color;
        ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  }

  render() {
    const { width, height } = this.props.canvasSize;

    this.renderObjects();

    return (
      <canvas className='editor-display' ref='ctx' width={ width } height={ height } />
    )
  }
}
