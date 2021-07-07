import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function ErrorModal(props) {
  const history = useHistory();
  const { isOpen, bodyText, cancelText, close, header } = props;

  const closeModal = () => {
    if (close) {
      close();
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{bodyText}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={closeModal}>
            {cancelText}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default ErrorModal;
