import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import {IconButton} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  Link,
  useHistory,
} from 'react-router-dom';

function Header({backButton}) {
  const history = useHistory();
  return (
      // BEM
      <div className={'header'}>

        {backButton ?
            (
                <IconButton onClick={() => history.replace(backButton)}>
                  <ArrowBackIosIcon className={'header__icon'}
                                    fontSize={'large'}/>
                </IconButton>
            ) :
            (
                <IconButton>
                  <PersonIcon className={'header__icon'} fontSize={'large'}/>
                </IconButton>
            )
        }
        <Link to={'/'}>
          <img
              className={'header__logo'}
              src={'https://www.vectorico.com/?wpfilebase_thumbnail=1&fid=317&name=Tinder-Icon.png'}
              alt="tinder logo"/>
        </Link>
        <Link to={'/chat'}>
          <IconButton>
            <ForumIcon className={'header__icon'} fontSize={'large'}/>
          </IconButton>
        </Link>
      </div>
  );
}

export default Header;