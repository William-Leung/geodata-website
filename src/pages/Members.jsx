import {useState, useEffect} from 'react'
import MemberCard from '../components/MemberCard';
import williamPhoto from '../assets/images/william.jpg';

export default function Members(){

  const[count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Members`;
  });

  
  const member = {
    name: 'William Leung',
    team: 'Data Team',
    photo: williamPhoto,
    bio: 'William likes baking!'
  };

  return(
    <>
      <h1 className='titleHeader'>Members</h1>
      <p>Team Leads:</p>
      <p>Team Lead, Reserve, + photos</p>
      <p>SubTeam Leads:</p>
      <p>pictures!!</p>
      <div>
      <MemberCard
        name={member.name}
        role={member.role}
        photo={member.photo}
        bio={member.bio}
      />
    </div>
    </>
  )
}