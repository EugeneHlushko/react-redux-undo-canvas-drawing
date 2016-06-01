import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditorDrawingboard from 'components/editor-drawingboard'
import * as EditorActions from 'actions/editor'
import * as GeneralActions from 'actions/general'

function mapStateToProps(state) {
  return {
    color: state.panel.color,
    size: state.panel.size,
    showColorPicker: state.general.showColorPicker
  }
}

function mapDispatchToProps(dispatch) {
  const combinedActions = {
    ...EditorActions,
    ...GeneralActions
  };
  return bindActionCreators(combinedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorDrawingboard)
