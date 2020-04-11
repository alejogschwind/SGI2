import React from 'react';

import Header from '../../components/header/header.component';
import PersonalForm from '../../components/personal-form/personal-form.component';
import FormWrapper from '../../components/form-wrapper/form-wrapper.component';

import './personal-data.styles.scss'
import Progressbar from '../../components/progressbar/progressbar.component';

const PersonalData = () => (
  <div className='personal-data'>
    <Header />
    <FormWrapper>
      <div className='progressbar-wrapper'>
        <h5>Datos completos al:</h5>
        <Progressbar
          progress={0.9}
        />
      </div>
      <PersonalForm />
    </FormWrapper>
  </div>
);

export default PersonalData;