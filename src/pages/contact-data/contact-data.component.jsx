import React from 'react';
import { connect } from 'react-redux';

import Progressbar from '../../components/progressbar/progressbar.component';
import FormWrapper from '../../components/form-wrapper/form-wrapper.component';
import ContactForm from '../../components/contact-form/contact-form.component';

import './contact-data.styles.scss';


class ContactData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null,
      loading: true
    }
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({contact: currentUser.contact, loading: false })
    }
  }


  render(){
    const { loading } = this.state;
    return (
      <div className='contact-data'>
        <FormWrapper>
          {
            !loading ?
              <>
                <div className='progressbar-wrapper'>
                  <h5>Datos completos al:</h5>
                  <Progressbar
                    progress={this.state.contact.percentage}
                  />
                </div>
                <ContactForm contact={this.state.contact}/>
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

export default connect(mapStateToProps)(ContactData);