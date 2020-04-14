import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/header.component';
import PersonalForm from '../../components/personal-form/personal-form.component';
import FormWrapper from '../../components/form-wrapper/form-wrapper.component';
import Progressbar from '../../components/progressbar/progressbar.component';

import './personal-data.styles.scss'

import { firestore } from '../../firebase/firebase.utils';
import WithLoading from '../../HOCs/withLoading';


const ProcentageBarWithLoading = WithLoading(<Progressbar />);

class PersonalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: null,
      loading: true
    }
  }

  // fetchData = async () => {
  //   const { userId } = this.props;
  //   console.log(this.props)
  //   const userSnapShot = await firestore.collection('users').doc(userId)
  //     .get()

  //   const userData = await userSnapShot.data()

  //   this.setState({
  //     personal: userData.personal,
  //     loading: false
  //   })
  // }

  componentDidMount() {
    // this.fetchData()
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({personal: currentUser.personal, loading: false })
    }
  }


  render(){
    return (
      <div className='personal-data'>
        <Header />
        <FormWrapper>
          <div className='progressbar-wrapper'>
            <h5>Datos completos al:</h5>
            {this.state.personal ?
              <Progressbar
                progress={this.state.personal.percentage}
              />
              : ''
            }
            
          </div>
          { !this.state.loading ?
            <PersonalForm personal={this.state.personal}/>
            : ''
          }
        </FormWrapper>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(PersonalData);