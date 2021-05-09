import React from 'react';
import './SwipButton.css';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplayIcon from '@material-ui/icons/Replay';
import {IconButton} from '@material-ui/core';

const SwipeButton = props => {
  return (
      <div className={'swipeButtons'}>
        <IconButton className={'swipeButtons__repeat'}>
          <ReplayIcon fontSize={'large'}/>
        </IconButton>
        <IconButton className={'swipeButtons__left'}>
          <CloseIcon fontSize={'large'}/>
        </IconButton>
        <IconButton className={'swipeButtons__start'}>
          <StarIcon fontSize={'large'}/>
        </IconButton>
        <IconButton className={'swipeButtons__favourite'}>
          <FavoriteIcon fontSize={'large'}/>
        </IconButton>
        <IconButton className={'swipeButtons__flash'}>
          <FlashOnIcon fontSize={'large'}/>
        </IconButton>
      </div>
  );
};

export default SwipeButton;
