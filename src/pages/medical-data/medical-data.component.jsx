import React from 'react';
import { connect } from 'react-redux';

import MedicalForm from '../../components/medical-form/medical-form.component';
import FormWrapper from '../../components/form-wrapper/form-wrapper.component';
import Progressbar from '../../components/progressbar/progressbar.component';

import './medical-data.styles.scss'


class MedicalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medical: null,
      loading: true
    }
  }

  componentDidMount() {
    // this.fetchData()
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({medical: currentUser.medical, loading: false })
    }
  }


  render(){
    const { loading } = this.state;
    return (
      <div className='medical-data'>
        <FormWrapper>
          {
            !loading ?   
              <>
                <div className='progressbar-wrapper'>
                  <h5>Datos completos al:</h5>
                  <Progressbar
                    progress={this.state.medical.percentage}
                  />
                </div>
                <MedicalForm medical={this.state.medical}/>
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

export default connect(mapStateToProps)(MedicalData);