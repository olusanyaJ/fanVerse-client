import "./DeleteModal.scss";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <p className="delete-modal__question">
          Are you sure you want to delete this post?
        </p>
        <div className="delete-modal__buttons">
          <button onClick={onDelete} className="delete-modal__btn">
            Delete
          </button>
          <button onClick={onClose} className="delete-modal__btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
