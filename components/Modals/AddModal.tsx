import useAddModal from "@/hooks/useAddModal";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface Props {}

const AddModal = (props: Props) => {
  const addModal = useAddModal();

  const onClose = () => {
    addModal.onClose();
  };
  return (
    <Modal isOpen={addModal.isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="zinc.900" fontSize="2xl">
          Add new post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={5} bg="zinc.900">
          Hello
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;
