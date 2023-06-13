
import React from "react";
import styled from "styled-components";

function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
      <Overlay>
        <ModalWrap>
          <Contents>
            <p>구입하기</p><br />
            <p>가격 : 💸10</p>
            <Button onClick={handleClose}>구입</Button>
            <CancelButton onClick={handleClose}>취소</CancelButton>
          </Contents>
        </ModalWrap>
      </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 45px;
  right: 150px;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #52CE50;
  }
`;
const CancelButton = styled.button`
  position: absolute;
  top: 45px;
  right: 50px;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #CF1520;
  }
`;
export default Modal;