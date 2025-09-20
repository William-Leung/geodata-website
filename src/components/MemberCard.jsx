import { useState} from 'react';
import './MemberCard.css';

const MemberCard = ({ id, name, role, photo, bio, isActive, onActivate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

  const eventHandlers = {};

  if (isTouchDevice) {
    eventHandlers.onTouchEnd = (e) => {
      e.preventDefault();
      onActivate(id);
    };
  } else {
    eventHandlers.onMouseEnter = () => setIsHovered(true);
    eventHandlers.onMouseLeave = () => setIsHovered(false);
  }

  const showOverlay = isActive || (!isTouchDevice && isHovered);

  return (
    <div className = "member-card" {...eventHandlers}>
      <div className = "member-card__photo-wrapper">
        <img src={photo} alt = {`${name}'s profile`} className = "member-card__photo"/>
        <div className = {`member-card__overlay ${showOverlay ? 'is-active' : ' '}`}>
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
