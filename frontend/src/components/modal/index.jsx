import { Modal as AntModal } from "antd";
import React from "react";

const Modal = ({ title, setOpen, handleClick, children,open }) => {
  return (
    <AntModal
      title={title}
      open={open}
      onOk={handleClick}
      onCancel={() => setOpen(false)}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
