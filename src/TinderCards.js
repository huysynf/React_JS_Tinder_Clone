import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import database from './firebase';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: ' huyhq',
      url: 'https://picsum.photos/200',
    },

    {
      name: 'haqhuy',
      url: 'https://picsum.photos/200',
    },
  ]);

  useEffect(() => {
  const unsubscribe =   database
      .collection('people')
      .onSnapshot(snapshot => {
      let data = snapshot.docs.map(doc => doc.data());
      setPeople(data);});
    return () => {
      unsubscribe();
    };
  }, [people]);

  return (
      <div className={'tinderCards'}>
        <p>Tinder card</p>
        <div className="tinderCards__cardContainer">
          {people.map(person => {
            return (
                <TinderCard
                    key={person.name}
                    className={'swipe'}
                    preventSwipe={['up', 'down']}
                >
                  <div style={{background: `url(${person.url})`}}
                       className={'card'}>
                    <h3>{person.name}</h3>
                  </div>
                </TinderCard>
            );
          })}
        </div>
      </div>
  );
}

export default TinderCards;