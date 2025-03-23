import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, role, photo, bio }) => {
  return (
    <div className="member-card">
      <img src={photo} alt={`${name}'s profile`} className="member-card__photo" />
      <div className="member-card__content">
        <h3 className="member-card__name">{name}</h3>
        <p className="member-card__role">{role}</p>
        {bio && <p className="member-card__bio">{bio}</p>}
      </div>
    </div>
  );
};

export default MemberCard;