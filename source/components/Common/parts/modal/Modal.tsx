import React, { useState, useEffect } from 'react';

interface ModalProps {
  id: string;
  label: string;
  title: string;
  body: React.ReactNode;
  handleAction: () => void;
  isOpen?: boolean;
  actionLabel?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  id,
  label,
  title,
  body,
  handleAction,
  isOpen = false,
  actionLabel = '確定',
  onClose,
}): JSX.Element => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    onClose(); // Call the provided onClose function to handle modal close
  };

  const modalHeader = (
    <div className="modal-header text-center p-4 items-center text-2xl font-medium justify-center rounded text-white bg-blue-500">
      <h5 className="modal-title" id={id}>
        {title}
      </h5>
      <button
        type="button"
        className="absolute top-4 right-4 p-2 text-white"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={handleClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

  const modalBody = <div className="modal-body text-black max-h-[80%] overflow-y-hidden mb-2">{body}</div>;

  const modalFooter = (
    <div className="modal-footer text-right mt-3 p-2 border border-t-stone-200 border-white">
      <button type="button" className="bg-white hidden md:inline-block  hover:text-stone-400 w-48 border border-stone-500 text-stone-500 text-sm mr-4 rounded-md px-4 py-2" data-bs-dismiss="modal">
        {label}
      </button>
      <button type="button" className="bg-blue-500 w-48 hover:bg-blue-400 text-white border text-sm mr-4 rounded-md px-4 py-2" onClick={handleAction} data-bs-dismiss="modal">
        {actionLabel}
      </button>
    </div>
  );

  return (
    <div className={`container w-full h-full flex flex-wrap items-center justify-between md:px-6 ${isOpen ? 'block' : 'hidden'}`}>
      <div
        className={`overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-150 delay-150 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="modal-dialog absolute w-full min-h-screen opacity-50 bg-black" />
        <div className="modal-content absolute bg-white h-full md:max-h-[80%] inset-x-0 md:inset-x-[35px] md:top-2 lg:inset-x-[100px] lg:top-2 md:w-11/12 md:max-w-[800px] md:mx-auto rounded shadow-lg z-50 overflow-hidden">
          {modalHeader}
          {modalBody}
          {modalFooter}
        </div>
      </div>
    </div>
  );
};

export default Modal;
