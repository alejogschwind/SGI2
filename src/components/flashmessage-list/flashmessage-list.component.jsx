import React from 'react';
import { connect } from 'react-redux';

import './flashmessage-list.styles.scss';
import FlashMessage from '../flashmessage/flashmessage.componet';
import { deleteFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class FlashmessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      flashmessages: []
    }
  }

  render() {
    const { deleteFlashMessage } = this.props;
    return (
    <div className="flashmessage-list">
      {
        this.props.flashmessages.length > 0 ?
          (this.props.flashmessages.map((flashmessage, key) => <div key={key} onClick={() => deleteFlashMessage(key)}><FlashMessage flashmessage={flashmessage}/></div>))
        :
        ''
      }
    </div>
  )}
} 

const mapStateToProps = state => ({
  flashmessages: state.flashmessages
});

const mapDispatchToProps = dispatch => ({
  deleteFlashMessage: (id) => dispatch(deleteFlashMessage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashmessageList);