import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "./style.css";

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="custom-modal"
    >
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>
          X
        </button>
        {children}
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  contentLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomModal;
