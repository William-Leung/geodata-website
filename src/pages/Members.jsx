import React, { useEffect } from 'react';
import williamPhoto from '../assets/images/william.jpg';
import MemberCard from '../components/MemberCard';

// Since I can't access local files like 'william.jpg', I'm using placeholder URLs.
// In your project, you would replace these strings with your imported photos like 'williamPhoto'.

export default function Members() {
  // This useEffect hook now has an empty dependency array [].
  // This means it will only run once when the component first loads, which is more efficient.
  useEffect(() => {
    document.title = `Members`;
  }, []);

  // Storing members in an array of objects is the best practice.
  const teamMembers = [
    {
      id: 1,
      name: 'William Leung',
      role: 'Data Team Lead',
      photo: williamPhoto,
      bio: 'William enjoys baking, data analysis, and creating elegant user interfaces.'
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Design Lead',
      photo: 'https://placehold.co/400x400/DDDDDD/555555?text=JD',
      bio: 'Jane is passionate about user experience and minimalist design.'
    },
    {
      id: 3,
      name: 'Alex Smith',
      role: 'Backend Lead',
      photo: 'https://placehold.co/400x400/CCCCCC/666666?text=AS',
      bio: 'Alex architects scalable systems and loves solving complex puzzles.'
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold' }}>Meet the Team</h1>
        <p style={{ color: '#555' }}>The talented individuals leading our subteams.</p>
      </div>

      {/* We use the .map() function to loop through the 'teamMembers' array.
        For each 'member' in the array, it creates a <MemberCard> component.
        The 'key' prop is essential for React to efficiently update the list.
      */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {teamMembers.map(member => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}