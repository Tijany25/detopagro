"use client"

import React, { useRef, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  extraModalClass?: React.CSSProperties
  extraClass?: any
  className?: any
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, extraModalClass, extraClass, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  
  
  

  if (!isOpen) return null;

  const modalStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
    ...extraModalClass
  };

  const modalContentStyle: any = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflowY: 'scroll',
    // maxHeight: '90vh',
    // height: '100%',
    position: 'absolute',
    ...extraClass
  };

  return (
    <div style={modalStyle}>
      <div ref={modalRef} className={className} style={modalContentStyle}>
        <div className='h-full'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
