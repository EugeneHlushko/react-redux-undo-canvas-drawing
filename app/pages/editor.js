import React, { Component } from 'react'
import EditorPanel from 'containers/editor-panel'
import EditorCanvas from 'containers/editor-canvas'
import EditorDrawingboard from 'containers/editor-drawingboard'

require('styles/components/canvas.scss');

export default class EditorPage extends Component {

  state = {
    canvasSize: {
      width: 0,
      height: 0
    },
    timeoutHolder: false
  }

  componentWillMount() {
    const height = window.innerHeight - 66;
    const width = window.innerWidth * 0.7;

    this.state.canvasSize = {
      width,
      height
    };

    window.addEventListener('resize orientationchange', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize orientationchange', this.handleResize);
  }

  handleResize = () => {
    if (this.state.timeoutHolder) {
      clearTimeout(this.state.timeoutHolder);
      this.state.timeoutHolder = false;
    }
    this.state.timeoutHolder = setTimeout(() => {
      const canvasSize = {
        height: window.innerHeight - 66,
        width: window.innerWidth * 0.7
      };

      this.setState({ canvasSize });
    }, 15);
  }


  render() {
    const { canvasSize } = this.state;

    return (
      <div className='editor'>
        <EditorPanel />
        <div className='editor-canvasholder'>
          <EditorCanvas canvasSize={ canvasSize } />
          <EditorDrawingboard canvasSize={ canvasSize } />
        </div>
      </div>
    )
  }
}
