import React from "react";
import { Modal } from "carbon-components-react";

export const ConfirmModal = ({title, text, closeOnPress, callback}) => {
  //const cardSample = {title:"abc",description:"desciption"}
  return (
    <Modal
      open={true}
      primaryButtonText="Submit"
      onRequestClose={() => {
        closeOnPress();
      }}
      onRequestSubmit={() => {
        callback();
      }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </Modal>
  );
};
