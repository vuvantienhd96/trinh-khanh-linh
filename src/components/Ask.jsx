import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Ask = ({ setPage }) => {
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [noBtnText, setNoBtnText] = useState("Không");

  const noTexts = [
    "Em chắc chưa? 🤨",
    "Chắc 100% luôn??",
    "Nghĩ lại đi em! 🧐",
    "Thật hả? 😢",
    "Suy nghĩ lại nha!",
    "Đừng mà em! 💔",
    "Anh đang khóc đây 😭",
    "Em ơi! 🥺",
    "Bấm CÓ đi mà!",
    "Lỗi: Nút Không đã hỏng! ❌",
    "Bấm CÓ đi em!!",
    "Em làm anh buồn lắm 💔",
    "Khoan, để anh suy nghĩ...",
    "Đó là câu trả lời cuối cùng sao?",
    "Làm ơn? 🙏",
    "Em thật sự muốn vậy sao?",
    "Không được. Thử lại. ✋",
    "Nghĩ về những kỷ niệm của chúng ta!",
    "Em biết em muốn nói CÓ mà! 😤"
  ];

  const moveButton = () => {
    const randomIndex = Math.floor(Math.random() * noTexts.length);
    setNoBtnText(noTexts[randomIndex]);

    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 150);
    
    setNoBtnStyle({ 
      position: 'fixed', 
      left: `${x}px`, 
      top: `${y}px`, 
      zIndex: 9999 
    });
  };

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1493', '#ffffff', '#ffb7c5']
    });
    setPage('success');
  };

  return (
    <>
      <h1>Em có muốn là nàng thơ của anh không?</h1>
      <p>Em không thể nói không đâu. Anh cảnh báo trước rồi nhé. 😏</p>
      <div className="gif-container">
          <img 
            src="/sad-cat.gif" 
            alt="Mèo buồn" 
            className="internal-gif" 
          />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', minHeight: '60px' }}>
        <button className="btn-primary" onClick={handleYes}>
            CÓ! 😍
        </button>

        <button 
          className="btn-no" 
          style={noBtnStyle} 
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          {noBtnText}
        </button>
      </div>
    </>
  );
};

export default Ask;
