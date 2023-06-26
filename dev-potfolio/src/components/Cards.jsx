import React, { useState } from 'react';

const Card = ({ image, title, moreInfo }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleDropdownToggle = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <div className="dropdown">
          <button className="dropdown-toggle" onClick={handleDropdownToggle}>
            Show More Info
          </button>

          {showMoreInfo && <div className="dropdown-content">{moreInfo}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
