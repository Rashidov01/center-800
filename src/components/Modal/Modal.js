import { Button, Modal } from "antd";
import React, { useState } from "react";
import FormHolder from "../FormHolder/FormHolder";
import SelectComp from "../Select/Select";
import "./modal.scss";

const App = ({ button, title, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className="ant-btn-add" onClick={showModal}>
        {button}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-body-container">
          <div className="modal-container__wrapper">
            <div className="modal-container-item">
              <FormHolder
                label="FIO"
                name="text"
                error="please enter your full name !"
                required="true"
              />
            </div>
            <div className="modal-container-item">
              <FormHolder
                label="Login"
                name="text"
                error="please enter your login !"
                required="true"
              />
            </div>
            <div className="modal-container-item">
              <FormHolder
                label="password"
                name="password"
                error="telefon raqami"
                required="true"
              />
            </div>
          </div>
          <div className="modal-container__wrapper">
            <div className="modal-container-item">
              <h3 className="modal-container-label">Boshqarma</h3>
              <SelectComp value="value" option="option" />
            </div>
            <div className="modal-container-item">
              <FormHolder
                label="password"
                name="password"
                error="ooo bitta bosayam narsa yoz !)))"
                required="true"
              />
            </div>
            <div className="modal-container-item">
              <FormHolder
                label="password"
                name="password"
                error="ooo bitta bosayam narsa yoz !)))"
                required="true"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
