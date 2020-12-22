import React from "react";

function Modal({ title ,artist, closeModalFunc}) {

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h4> Lyrics of {title} by {artist}</h4>
          <button type="button" onClick={closeModalFunc}> <i className="fa fa-times-circle-o" aria-hidden="true" ></i></button>
         
        </div>
      </div>
    </>
  );
}

export default Modal;
