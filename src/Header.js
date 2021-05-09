import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import {IconButton} from '@material-ui/core';

function Header() {
  return (
      // BEM
      <div className={'header'}>
        <IconButton>
          <PersonIcon className={'header__icon'} fontSize={'large'}/>
        </IconButton>
        <img
            className={'header__logo'}
            src={'https://www.vectorico.com/?wpfilebase_thumbnail=1&fid=317&name=Tinder-Icon.png'}
            alt="tinder logo"/>
        <IconButton>
          <ForumIcon className={'header__icon'} fontSize={'large'}/>
        </IconButton>
      </div>
  );
}

export default Header;