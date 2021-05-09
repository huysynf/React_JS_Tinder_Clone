import React from 'react';
import './Chats.css';
import Chat from './Chat';
const Chats = () => {
  return (
      <div className={'chats'}>
        <Chat
          name={"huyhq"}
          message={"hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy hello Guy"}
          timestamps={'40 seconds'}
          profilePic={'https://picsum.photos/200'}
        />

        <Chat
            name={"Huy"}
            message={"hello Guy"}
            timestamps={'40 seconds'}
            profilePic={'https://picsum.photos/200'}
        />

        <Chat
            name={"Quang"}
            message={"hello Guy"}
            timestamps={'40 seconds'}
            profilePic={'https://picsum.photos/200'}
        />

        <Chat
            name={"Nam"}
            message={"hello Guy"}
            timestamps={'40 seconds'}
            profilePic={'https://picsum.photos/200'}
        />
      </div>
  );
};

export default Chats;
