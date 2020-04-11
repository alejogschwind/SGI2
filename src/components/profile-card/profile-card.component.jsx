import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../avatar/avatar.component'
import ProfileButton from '../profile-button/profile-button.component';

import {ReactComponent as PersonIcon} from './assets/person.svg';
import {ReactComponent as MedicalIcon} from './assets/medical.svg';
import {ReactComponent as InstitutionalIcon} from './assets/institutional.svg';
import {ReactComponent as ContactIcon} from './assets/contact.svg';
import {ReactComponent as InfoIcon} from './assets/info.svg';

import './profile-card.styles.scss';

const ProfileCard = ({user}) => (
  <div className="profile-card">
    <div className="data-container">
      <Avatar avatar={user.avatar}/>
      <h3 className="name">Alejo Gschwind</h3>
      <span className="email">alejogschiwnd.97@gmail.com</span>
    </div>
    <div className="menu">
      <Link to='/profile/personal'>
        <ProfileButton text="Datos Personales" icon={<PersonIcon />}/>
      </Link>
      <ProfileButton text="Datos Medicos" icon={<MedicalIcon />}/>
      <ProfileButton text="Datos Institucionales" icon={<InstitutionalIcon />}/>
      <ProfileButton text="Contacto de Emergencias" icon={<ContactIcon />}/>
      <ProfileButton text="Info" icon={<InfoIcon />}/>
    </div>
  </div>
);

export default ProfileCard;