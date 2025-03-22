import React from "react";

const LoveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">My Love Note 💝</h2>
        <p className="modal-message">
          I love you more than yesterday, but less than tomorrow 💕
        </p>
      </div>
    </>
  );
};

export default LoveModal;
