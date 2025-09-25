import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import teamMembers from '../components/Member Data'


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