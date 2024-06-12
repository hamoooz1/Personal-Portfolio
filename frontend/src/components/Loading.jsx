import React from 'react';
import '../styles/Loading.css'; // Make sure this CSS file includes the styles for the transition and the checkmark

const Loading = ({ isExiting, showCheckmark }) => {
  return (
    <div className={`loading-container ${isExiting ? 'exit' : ''}`}>
      {showCheckmark ? (
        <div className="checkmark">&#10004;</div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default Loading;
