import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import defaultPhoto from '../assets/images/default.jpg'
import williamHeadshot from '../assets/images/william_leung_headshot.png'
import orionHeadshot from '../assets/images/orion_hoch_headshot.jpeg'


export default function Members() {
  useEffect(() => {
    document.title = `Members`;
  }, []);

  const [activeCardId, setActiveCardId] = useState(null);
  const teamContainerRef = useRef(null);

  const handleActivate = (memberId) => {
    setActiveCardId(prevId => (prevId === memberId ? null : memberId));
  };

  // closes cards outside element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (teamContainerRef.current && !teamContainerRef.current.contains(event.target)) {
        setActiveCardId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'William Leung',
      role: 'Data Team Lead',
      photo: williamHeadshot,
      bio: 'I\'m William and I love to bake! So far, I\'ve made egg tarts, pineapple bread, tiramisu, and cheesecake but I\'m sure more will be added to the list soon :) Outside of baking, I like to run, daydream, and go to the Farmer\'s Market.'
    },
    {
      id: 2,
      name: 'Orion Hoch',
      role: 'Water Team Lead',
      photo: orionHeadshot,
      bio: 'Hey I\'m Orion! Outside of the team you can find me on WVBR talking sports and movies, biking around Ithaca, and playing in 9 Fantasy leagues.'
    },
    {
      id: 3,
      name: 'Ashley Zhao',
      role: 'Data Team Member',
      photo: defaultPhoto,
      bio: 'hi.'
    }
  ];

  return (
    <div>
      <h1 className='titleHeader'>Members</h1>
      <p>Team Leads:</p>
      <p>Team Lead, Reserve, + photos</p>
      <p>SubTeam Leads:</p>
      <p>pictures!!</p>

      <div ref={teamContainerRef} style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem' }}
        onClick={(e) => {
          if (e.target === teamContainerRef.current) {
            setActiveCardId(null);
          }
        }}
      >
        
        {teamMembers.map(member => (
          <MemberCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            bio={member.bio}
            isActive={activeCardId === member.id} 
            onActivate={handleActivate}
          />
        ))}
      </div>
    </div>
  );
}