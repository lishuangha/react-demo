import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        ...style // 允许外部传入样式覆盖默认样式
      }}
    >
      {text}
    </button>
  );
};

export default Button;