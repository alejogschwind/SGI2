import React from 'react';
import { connect } from 'react-redux';

import InstitutionalForm from '../../components/institutional-form/institutional-form.component';
import FormWrapper from '../../components/form-wrapper/form-wrapper.component';
import Progressbar from '../../components/progressbar/progressbar.component';

import './institutional-data.styles.scss';

class InstitutionalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institutional: null,
      loading: true
    }
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({institutional: currentUser.institutional, loading: false })
    }
  }


  render(){
    const { loading } = this.state;
    return (
      <div className='institutional-data'>
        <FormWrapper>
          {
            !loading ?
              <>
                <div className='progressbar-wrapper'>
                  <h5>Datos completos al:</h5>
                  <Progressbar
                    progress={this.state.institutional.percentage}
                  />
                </div>
                <InstitutionalForm institutional={this.state.institutional}/>
              </>
            :
             ''
          }
        </FormWrapper>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(InstitutionalData);