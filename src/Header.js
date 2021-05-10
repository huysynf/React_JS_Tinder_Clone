import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import {IconButton} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Badge from '@material-ui/core/Badge';

import {
  Link,
  useHistory,
} from 'react-router-dom';

function Header({backButton}) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

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
                <div>
                  <IconButton aria-controls="simple-menu" aria-haspopup="true"
                              onClick={handleClick}
                              fontSize={'large'}>
                    <PersonIcon className={'header__icon'}
                    />

                  </IconButton>
                  <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      className={'user__menu'}
                  >
                    <MenuItem> <PersonIcon/> Sign In</MenuItem>
                    <MenuItem><PersonAddIcon/>Register</MenuItem>
                    <MenuItem><AccountBoxIcon/>Profile</MenuItem>
                  </Menu>
                </div>
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
            <Badge color="error" badgeContent={20}
                   anchorOrigin={{
                     horizontal: 'right' ,
                     vertical: 'top'
                   }}
                   className={'notification__count'}
                   max={999}>
              <ForumIcon className={'header__icon'} fontSize={'large'}/>
            </Badge>
          </IconButton>
        </Link>
      </div>
  );
}

export default Header;