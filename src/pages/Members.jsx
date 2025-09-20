import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import williamPhoto from '../assets/images/william.jpg'

// Since I can't access local files like 'william.jpg', I'm using placeholder URLs.
// In your project, you would replace these strings with your imported photos like 'williamPhoto'.

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
      photo: williamPhoto,
      bio: 'William enjoys baking'
    },
    {
      id: 2,
      name: 'Kylie Miller',
      role: 'Full Team Lead',
      photo: williamPhoto,
      bio: 'hi'
    },
    {
      id: 3,
      name: 'Ashley Zhao',
      role: 'Data Team Member',
      photo: williamPhoto,
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

      <div ref={teamContainerRef} style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}
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