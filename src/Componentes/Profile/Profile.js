import React from 'react';
import './Profile.css';
const Profile1 = (props) => {
  return (
    <div style={{ padding: '5em 10em 5em 10em' }}>
      <div className='contenedorProfile'>
        <div className='profile1__header'></div>

        <div className='profile1__section-name'>
          <img
            src={props.usuario.picture}
            alt='Avatar'
            className='profile1__avatar'></img>
          <h1>
            {props.usuario.name} <br />
          </h1>
        </div>

        <div className='profile1__section-info'>
          <h3>{props.usuario.nickname}</h3>
          <div>@{props.usuario.email}</div>
        </div>

        <div className='profile1__footer'>#E-Sports</div>
      </div>
    </div>
  );
};

export default Profile1;
