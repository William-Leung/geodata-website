import { useEffect, useState, useRef } from 'react';
import MemberCard from '../components/MemberCard';
import teamMembers from '../components/Member Data'
import './Members.css'


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
    <div onClick={(e) => {
          if (e.target === teamContainerRef.current) {
            setActiveCardId(null);
          }
        }}>
      <h1 className='titleHeader'>Members</h1>
      <div className = "member-cards">
        <h2> Data Team </h2>
        <div className= 'teamContainerRef' >
          {teamMembers
            .filter(member => member.role.includes('Data Team'))
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              // coffee chat form
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

        <h2> Water Team </h2>
        <div className= 'teamContainerRef'>
          {teamMembers
            .filter(member => member.role.includes('Water Team'))
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              // coffee chat form
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

        <h2> Air Team </h2>
        <div className= 'teamContainerRef'>
          {teamMembers
            .filter(member => member.role.includes('Air Team'))
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              // coffee chat form
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

        <h2> Business Team </h2>
        <div className= 'teamContainerRef'>
          {teamMembers
            .filter(member => member.role.includes('Business Team'))
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              // coffee chat form
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

      </div>      
    </div>
  );
}