import { connect } from 'react-redux'
import EditorCanvas from 'components/editor-canvas'

function mapStateToProps(state) {
  return {
    dots: state.editor.present.dots
  }
}

export default connect(mapStateToProps)(EditorCanvas)
