import React from "react";

const Modal = ({ status, styleName, onClick, name }) => {
  return (
    <div className={styleName}>
      <h3>{status ? "Sucess" : "Please try again"}</h3>
      <p><strong>안녕하세요. {name} 님</strong></p>
      {status ? (
        <p>메일이 성공적으로 발송되었습니다.😊</p>
      ) : (
        <p>
          아쉽게도 메일 발송에 실패했습니다.🥺 <br /> 다시 시도해주세요.
        </p>
      )}
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default Modal;
