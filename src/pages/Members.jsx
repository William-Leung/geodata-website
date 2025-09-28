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
      <h2 className = 'subheading'> Subteam Leads </h2>
        <div className= 'teamContainerRef' >
          {teamMembers
            .filter(member => member.role.includes('Lead'))
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>
        <h2 className = 'subheading'> Data Team </h2>
        <div className= 'teamContainerRef' >
          {teamMembers.filter(member => member.role.includes('Data')).sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
          }).map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

        <h2 className = 'subheading'> Rock Team </h2>
          <div className= 'teamContainerRef' >
            {teamMembers
              .filter(member => member.role.includes('Rock')).sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
          }).map(member => (
              <MemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                photo={member.photo}
                bio={member.bio}
                // linkedin
                coffee={member.coffee}
                isActive={activeCardId === member.id} 
                onActivate={handleActivate}
              />
            ))}
        </div>
        <h2 className = 'subheading'> Water Team </h2>
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
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

        <h2 className = 'subheading'> Air Team </h2>
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
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>
        <h2 className = 'subheading'> Tech Team </h2>
        <div className= 'teamContainerRef' >
          {((teamMembers
            .filter(member => member.role.includes('Tech Team')).filter(member => !member.role.includes('Lead'))).sort())
            .map(member => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              // linkedin
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>
        <h2 className = 'subheading'> Business Team </h2>
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
              coffee={member.coffee}
              isActive={activeCardId === member.id} 
              onActivate={handleActivate}
            />
          ))}
        </div>

      </div>      
    </div>
  );
}