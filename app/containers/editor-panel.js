import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditorPanel from 'components/editor-panel'
import * as PanelActions from 'actions/panel'
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
  const allActions = {
    ...PanelActions,
    ...EditorActions,
    ...GeneralActions
  };
  return bindActionCreators(allActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel)
