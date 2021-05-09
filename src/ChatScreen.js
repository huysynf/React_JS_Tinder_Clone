import React, {useState} from 'react';
import './ChatScreen.css';
import {Avatar} from '@material-ui/core';

function ChatScreen(props) {
  const [messages, setMessages] = useState([
    {
      name: 'Elent',
      image: 'https://picsum.photos/200',
      message: 'What Up',
    },

    {
      name: 'Elent',
      image: 'https://picsum.photos/200',
      message: 'How are you?',
    },
    {
      message: 'How are you?',
    },
  ]);

  const [input, setInput] = useState('');

  const handleSend = (e)=>{
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput('');
  }
  return (
      <div className={'chatScreen'}>
        <p className={'chatScreen__timestamps'}>You matched with elen on
          10/10/2021</p>
        {messages.map(message => {
          return (
              message.name
                  ? (
                      <div className={'chatScreen__message'}>
                        <Avatar className={'chatScreen__image'} alt={message.name}
                                src={message.image}/>
                        <p className={'chatScreen__text'}>{message.message}</p>
                      </div>
                  ) : (
                      <div className={'chatScreen__message'}>
                        <p className={'chatScreen__textUser'}>
                          {message.message}
                        </p>
                      </div>
                  )
          );
        })}
        <form className={'chatScreen__input'}>
          <input className={'chatScreen__inputField'}
                 value={input}
                 onChange={e => {
                   setInput(e.target.value);
                 }}
                 placeholder={'Type a message....'}
                 type="text"/>
          <button className={'chatScreen__inputButton'}
                  onClick={handleSend}
          >
            Send
          </button>
        </form>
      </div>
  );
}

export default ChatScreen;