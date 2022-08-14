import React, { useState } from 'react';
import './tindercards.css';
import TinderCard from 'react-tinder-card';

export const TinderCards = () => {
    const [people,setPeople] = useState([
        {
            name:'Agung Hermawan',
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/640px-Elon_Musk_2015.jpg"
        },
        {
            name:'Hiee',
            url:"https://asset.kompas.com/crops/Nzd8Wg_VyGH8dM9CI4J1fqIupco=/0x0:3159x2106/750x500/data/photo/2021/05/02/608eb6854cbba.jpg"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
       // setLastDirection(direction);
       console.log("removing : " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer' >
            {people.map((person) => (
                 <TinderCard
                 className="swipe"
                 key={person.name}
                 preventSwipe={['up', 'down']}
                 onSwipe={(dir) => swiped(dir, person.name)}
                 onCardLeftScreen={() => outOfFrame(person.name)}
               >
                 <div
                   style={{ backgroundImage: `url(${person.url})` }}
                   className="card"
                 >
                   <h3>{person.name}</h3>
                 </div>
               </TinderCard>
                
            ))}

        </div>
        
    </div>
  );
};

