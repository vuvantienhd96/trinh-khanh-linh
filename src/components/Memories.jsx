import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memoriesData = [
  {
    id: 1,
    text: "Có lẽ bức ảnh đẹp nhất anh từng thấy... là bức có em. 💫",
    img: "/1.jpg"
  },
  {
    id: 2,
    text: "Em không cần cười thật nhiều, chỉ cần là chính em. Vì em lúc nào cũng đẹp nhất rồi. 😊",
    img: "/2.jpg"
  },
  {
    id: 3,
    text: "Có những người chỉ xuất hiện một lần, nhưng ở lại cả đời. Em chính là người đó. 🌟",
    img: "/3.jpg"
  },
  {
    id: 4,
    text: "Em là lý do khiến những ngày bình thường trở nên đáng nhớ. Mỗi khoảnh khắc bên em đều là kỷ niệm đẹp. ☕💕",
    img: "/4.jpg"
  },
  {
    id: 5,
    text: "Nếu bình yên có hình dáng, chắc sẽ giống nụ cười của em. 💖",
    img: "/5.jpg"
  },
  {
    id: 6,
    text: "Anh thích ngắm hoàng hôn, nhưng thích ngắm em hơn. Đẹp nhất không phải phong cảnh, mà là em đứng trong phong cảnh ấy. 🌅",
    img: "/6.jpg"
  },
  {
    id: 7,
    text: "Anh từng nghĩ mình thích chụp ảnh... cho đến khi chỉ muốn lưu giữ mỗi em. 📷",
    img: "/7.jpg"
  },
  {
    id: 8,
    text: "Người ta hỏi điều gì khiến anh mỉm cười. Thật lạ, câu trả lời luôn là em. 😍",
    img: "/8.jpg"
  },
  {
    id: 9,
    text: "Anh không tìm kiếm điều hoàn hảo. Anh chỉ vô tình tìm thấy em. ✨",
    img: "/9.jpg"
  },
  {
    id: 10,
    text: "Có hàng triệu khuôn mặt. Nhưng ánh mắt anh luôn tìm đúng một người — em. 💫",
    img: "/10.jpg"
  },
  {
    id: 11,
    text: "Em không phải phép màu. Nhưng mọi điều đều trở nên kỳ diệu từ khi có em. ✨💕",
    img: "/11.jpg"
  },
  {
    id: 12,
    text: "Nếu em đã đọc được đến những dòng này... Hãy biết rằng trong hàng tỷ người trên thế giới, anh vẫn luôn thấy em là điều đẹp nhất. 💝",
    img: "/14.jpg"
  }
];

// === CÁC KIỂU HIỆU ỨNG CHỮ KHÁC NHAU ===

// 1. Typing - gõ từng ký tự
const TypingEffect = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && <span className="typing-cursor">|</span>}
    </span>
  );
};

// 2. Fade từng từ - mỗi từ xuất hiện dần
const FadeWordsEffect = ({ text }) => {
  const words = text.split(' ');
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
          style={{ display: 'inline-block', marginRight: '6px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// 3. Slide lên từ dưới - cả câu trượt lên mượt
const SlideUpEffect = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};

// 4. Blur reveal - từ mờ sang rõ
const BlurRevealEffect = ({ text }) => {
  const words = text.split(' ');
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          style={{ display: 'inline-block', marginRight: '6px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// 5. Scale bounce - từng từ nhảy vào
const BounceEffect = ({ text }) => {
  const words = text.split(' ');
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: i * 0.1, 
            type: "spring", 
            stiffness: 200, 
            damping: 12 
          }}
          style={{ display: 'inline-block', marginRight: '6px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// 6. Glow text - chữ sáng dần lên
const GlowEffect = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, textShadow: '0 0 0px rgba(255,20,147,0)' }}
      animate={{ 
        opacity: 1, 
        textShadow: '0 0 12px rgba(255,20,147,0.5)' 
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};

// Chọn hiệu ứng dựa theo index
const TextEffect = ({ text, index }) => {
  const effectType = index % 6;
  
  switch (effectType) {
    case 0: return <TypingEffect text={text} />;
    case 1: return <FadeWordsEffect text={text} />;
    case 2: return <SlideUpEffect text={text} />;
    case 3: return <BlurRevealEffect text={text} />;
    case 4: return <BounceEffect text={text} />;
    case 5: return <GlowEffect text={text} />;
    default: return <TypingEffect text={text} />;
  }
};

const Memories = ({ setPage }) => {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextSlide = () => {
    if (index < memoriesData.length - 1) {
      setIndex(index + 1);
    } else {
      setPage('ask');
    }
  };

  const handleImageClick = () => {
    setZoomed(true);
  };

  const handleCloseZoom = () => {
    setZoomed(false);
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="memory-layout"
        >
          <div className="photo-frame">
            <div className="photo-wrapper" onClick={handleImageClick}>
              <motion.img 
                src={memoriesData[index].img} 
                alt="kỷ niệm" 
                className="photo-placeholder"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={`img-${index}`}
              />
              {/* Hint nhấn để zoom */}
              <div className="zoom-hint">🔍 Nhấn để phóng to</div>
            </div>
          </div>
          
          <div className="memory-text">
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              <TextEffect 
                text={typeof memoriesData[index].text === 'string' ? memoriesData[index].text : ''} 
                index={index} 
                key={`effect-${index}`} 
              />
            </p>
            <div style={{ marginTop: '20px' }}>
              <button className="btn-primary" onClick={nextSlide}>
                {index === memoriesData.length - 1 ? "Anh có câu hỏi cho em 🌹" : "Tiếp theo 💖"}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox zoom overlay */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseZoom}
          >
            <motion.div
              className="zoom-content"
              initial={{ scale: 0.6, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.6, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow phía sau ảnh */}
              <div className="zoom-glow" />
              
              <img
                src={memoriesData[index].img}
                alt="kỷ niệm"
                className="zoom-image"
              />

              {/* Caption */}
              <motion.p
                className="zoom-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                💕 {typeof memoriesData[index].text === 'string' 
                  ? memoriesData[index].text 
                  : "Khoảnh khắc đẹp nhất..."}
              </motion.p>

              {/* Nút đóng */}
              <motion.button
                className="zoom-close"
                onClick={handleCloseZoom}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Memories;
