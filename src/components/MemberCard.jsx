import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, role, photo, bio }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className = "member-card"
      // change isHovered variable based on when we leave/enter the member card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className = "member-card__photo-wrapper">
        <img src={photo} alt = {`${name}'s profile`} className = "member-card__photo"></img>
        <div className = {`member-card__overlay ${isHovered ? 'is-active' : ' '}`}>
          {bio && <p className = "member-card__bio">
            {bio}
          </p>} 
        </div>
      </div>


      <div className = "member-card__content">
        <p className = "member-card__name">{name}</p>
        <p className = "member-card__role">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
//  don't render the bio if it doesn't exist

